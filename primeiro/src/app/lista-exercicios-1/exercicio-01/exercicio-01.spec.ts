import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio01 } from './exercicio-01';

describe('Exercicio01', () => {
  let component: Exercicio01;
  let fixture: ComponentFixture<Exercicio01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio01],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
