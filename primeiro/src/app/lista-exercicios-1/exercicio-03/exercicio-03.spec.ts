import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio03 } from './exercicio-03';

describe('Exercicio03', () => {
  let component: Exercicio03;
  let fixture: ComponentFixture<Exercicio03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio03],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
