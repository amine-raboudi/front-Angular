import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResAgComponent } from './res-ag.component';

describe('ResAgComponent', () => {
  let component: ResAgComponent;
  let fixture: ComponentFixture<ResAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
