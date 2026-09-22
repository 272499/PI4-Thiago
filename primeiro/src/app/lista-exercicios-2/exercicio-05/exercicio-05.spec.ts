import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio05 } from './exercicio-05';

describe('Exercicio05', () => {
  let component: Exercicio05;
  let fixture: ComponentFixture<Exercicio05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio05],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
