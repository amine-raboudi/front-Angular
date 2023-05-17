import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowofferComponent } from './showoffer.component';

describe('ShowofferComponent', () => {
  let component: ShowofferComponent;
  let fixture: ComponentFixture<ShowofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
