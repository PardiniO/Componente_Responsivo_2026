import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leyenda2Component } from './leyenda2.component';

describe('Leyenda2Component', () => {
  let component: Leyenda2Component;
  let fixture: ComponentFixture<Leyenda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Leyenda2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leyenda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
