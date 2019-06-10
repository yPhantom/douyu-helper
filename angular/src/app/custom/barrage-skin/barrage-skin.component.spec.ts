import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrageSkinComponent } from './barrage-skin.component';

describe('BarrageSkinComponent', () => {
  let component: BarrageSkinComponent;
  let fixture: ComponentFixture<BarrageSkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrageSkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrageSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
