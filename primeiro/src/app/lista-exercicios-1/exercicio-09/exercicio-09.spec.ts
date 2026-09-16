import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio09 } from './exercicio-09';

describe('Exercicio09', () => {
  let component: Exercicio09;
  let fixture: ComponentFixture<Exercicio09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio09],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
