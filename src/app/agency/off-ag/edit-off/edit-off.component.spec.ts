import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOffComponent } from './edit-off.component';

describe('EditOffComponent', () => {
  let component: EditOffComponent;
  let fixture: ComponentFixture<EditOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
