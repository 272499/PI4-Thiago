import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio07 } from './exercicio-07';

describe('Exercicio07', () => {
  let component: Exercicio07;
  let fixture: ComponentFixture<Exercicio07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio07],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
