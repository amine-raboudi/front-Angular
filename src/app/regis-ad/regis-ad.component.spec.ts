import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisAdComponent } from './regis-ad.component';

describe('RegisAdComponent', () => {
  let component: RegisAdComponent;
  let fixture: ComponentFixture<RegisAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
