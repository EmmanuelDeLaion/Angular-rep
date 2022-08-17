import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeViewComponent } from './personaje-view.component';

describe('PersonajeViewComponent', () => {
  let component: PersonajeViewComponent;
  let fixture: ComponentFixture<PersonajeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
