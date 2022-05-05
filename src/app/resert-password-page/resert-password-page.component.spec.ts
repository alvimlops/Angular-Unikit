import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResertPasswordPageComponent } from './resert-password-page.component';

describe('ResertPasswordPageComponent', () => {
  let component: ResertPasswordPageComponent;
  let fixture: ComponentFixture<ResertPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResertPasswordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResertPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
