import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisAgComponent } from './regis-ag.component';

describe('RegisAgComponent', () => {
  let component: RegisAgComponent;
  let fixture: ComponentFixture<RegisAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
