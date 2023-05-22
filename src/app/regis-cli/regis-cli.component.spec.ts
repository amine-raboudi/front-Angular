import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisCliComponent } from './regis-cli.component';

describe('RegisCliComponent', () => {
  let component: RegisCliComponent;
  let fixture: ComponentFixture<RegisCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
