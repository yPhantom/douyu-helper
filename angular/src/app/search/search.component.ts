import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FishUtil} from '../common/fish.util';
import {FishHttpService} from '../service/fish-http.service';
import {DyConstants} from '../common/dy.constants';
import {numberLiteralTypeAnnotation} from '@babel/types';

interface Barrage {
  id: string;
  time: string;
  cardLevel: number;
  cardName: string;
  level: number;
  roomId: number;
  userName: string;
  text: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {

  userName: string;
  barrages = new Map<number, Barrage[]>();
  barrageRooms: number[] = [];
  selectedRoomIndex: number;

  roomMap: {[key: number]: string} = {};

  constructor(
    private httpClient: FishHttpService,
    private ref: ChangeDetectorRef
  ) {
    this.initRoomMap();
  }

  ngOnInit() {
  }

  search(userName: string): void {
    if (FishUtil.isEmptyOrNull(userName)) {
      return;
    }
    this.httpClient.get(DyConstants.BARRAGE_QUERY_URL, 'json', {userName}, (res) => {
      this.parseJsonBarrages(res);
      this.ref.detectChanges();
    });
  }

  public getRandomName(): void {
    const that = this;
    this.httpClient.get(DyConstants.RANDOM_NAME_URL, 'text', {}, (res) => {
      that.userName = res;
      this.ref.detectChanges();
    });
  }

  public parseJsonBarrages(jsonList: Barrage[]): void {
    this.barrages.clear();

    for (const barrage of jsonList) {
      if (!this.barrages.has(barrage.roomId)) {
        this.barrages.set(barrage.roomId, jsonList.filter(x => x.roomId === barrage.roomId));
      }
    }
    this.barrageRooms = Array.from(this.barrages.keys());
  }

  public initRoomMap(): void {
    this.roomMap[9999] = DyConstants.YYF;
    this.roomMap[60937] = DyConstants.ZARD;
    this.roomMap[74960] = DyConstants.CHEN;
    this.roomMap[110] = DyConstants.NAI;
    this.roomMap[73966] = DyConstants.MAYBE;
    this.roomMap[88660] = DyConstants.ZHOU;
    this.roomMap[52876] = DyConstants.ZSMJ;
    this.roomMap[1972046] = DyConstants.LILITH;
  }

  public getRoomName(roomId: number): string {
    return this.roomMap[roomId];
  }

  public jsonBarrageToString(barrage: Barrage): string {
    if (FishUtil.isEmptyOrNull(barrage.cardName) || barrage.level === 0) {
      return `${barrage.time} 精神股东 [${barrage.level}级 ${barrage.userName}]: ${barrage.text}`;
    }
    return `${barrage.time} ${barrage.cardLevel}级${barrage.cardName} [${barrage.level}级 ${barrage.userName}]: ${barrage.text}`;
  }
}
