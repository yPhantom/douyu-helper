import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanmuSettingsComponent } from './barrage-catch.component';

describe('DanmuSettingsComponent', () => {
  let component: DanmuSettingsComponent;
  let fixture: ComponentFixture<DanmuSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanmuSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanmuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
