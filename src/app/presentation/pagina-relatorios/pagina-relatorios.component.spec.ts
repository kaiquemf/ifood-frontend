import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRelatoriosComponent } from './pagina-relatorios.component';

describe('PaginaRelatoriosComponent', () => {
  let component: PaginaRelatoriosComponent;
  let fixture: ComponentFixture<PaginaRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaRelatoriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
