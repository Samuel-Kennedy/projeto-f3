import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MeuPlanoComponent } from './meu-plano.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ChangeDetectorRef } from '@angular/core';

describe('MeuPlanoComponent', () => {
  let component: MeuPlanoComponent;
  let fixture: ComponentFixture<MeuPlanoComponent>;
  let router: Router;
  let cdRef: ChangeDetectorRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MeuPlanoComponent],
      providers: [ChangeDetectorRef]
    });

    fixture = TestBed.createComponent(MeuPlanoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    cdRef = TestBed.inject(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve atualizar isClicked e selectedOption quando alterarCorEventos for chamado', () => {
    component.alterarCorEventos(2);
    expect(component.isClicked).toEqual([false, false, true, false, false, false, false, false]);
    expect(component.selectedOption).toEqual(component.options[2]);
  });

  it('deve resetar corretamente o array isClicked quando alterarCorEventos for chamado com índice diferente', () => {
    component.alterarCorEventos(1);
    expect(component.isClicked).toEqual([false, true, false, false, false, false, false, false]);

    component.alterarCorEventos(4);
    expect(component.isClicked).toEqual([false, false, false, false, true, false, false, false]);
  });

  it('deve navegar para o login quando enviarLogin for chamado', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.enviarLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
