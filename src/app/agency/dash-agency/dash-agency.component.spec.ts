import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAgencyComponent } from './dash-agency.component';

describe('DashAgencyComponent', () => {
  let component: DashAgencyComponent;
  let fixture: ComponentFixture<DashAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
