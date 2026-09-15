import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio04 } from './exercicio-04';

describe('Exercicio04', () => {
  let component: Exercicio04;
  let fixture: ComponentFixture<Exercicio04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio04],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
