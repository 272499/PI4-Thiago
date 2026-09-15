import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio06 } from './exercicio-06';

describe('Exercicio06', () => {
  let component: Exercicio06;
  let fixture: ComponentFixture<Exercicio06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio06],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
