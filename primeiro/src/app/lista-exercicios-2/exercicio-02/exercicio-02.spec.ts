import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio02 } from './exercicio-02';

describe('Exercicio02', () => {
  let component: Exercicio02;
  let fixture: ComponentFixture<Exercicio02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio02],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
