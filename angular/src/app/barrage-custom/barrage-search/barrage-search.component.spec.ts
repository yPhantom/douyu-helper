import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrageSearchComponent } from './barrage-search.component';

describe('BarrageSearchComponent', () => {
  let component: BarrageSearchComponent;
  let fixture: ComponentFixture<BarrageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
