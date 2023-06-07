import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOffComponent } from './add-off.component';

describe('AddOffComponent', () => {
  let component: AddOffComponent;
  let fixture: ComponentFixture<AddOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
