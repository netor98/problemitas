import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBotonComponent } from './dados-boton.component';

describe('DadosBotonComponent', () => {
  let component: DadosBotonComponent;
  let fixture: ComponentFixture<DadosBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
