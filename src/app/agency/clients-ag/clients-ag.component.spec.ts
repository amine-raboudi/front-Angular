import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAgComponent } from './clients-ag.component';

describe('ClientsAgComponent', () => {
  let component: ClientsAgComponent;
  let fixture: ComponentFixture<ClientsAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
