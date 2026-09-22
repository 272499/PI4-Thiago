import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio08 } from './exercicio-08';

describe('Exercicio08', () => {
  let component: Exercicio08;
  let fixture: ComponentFixture<Exercicio08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio08],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
