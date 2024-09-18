import { Component } from '@angular/core';
import {NavegacaoLateralComponent} from "../../shared/presentation/navegacao-lateral/navegacao-lateral.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {Router} from "@angular/router";
import {MatInput} from "@angular/material/input";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatIconButton} from "@angular/material/button";

export interface TransacoesModel {
  id: string,
  pedido: string,
  descricao: string,
  data: string,
  valor: string
}

const ELEMENT_DATA: TransacoesModel[] = [
  {id: '107', pedido: 'X-Bacon', descricao: '', data: '17/02/2024', valor: 'R$35,00'},
  {id: '108', pedido: 'X-Salada', descricao: '', data: '05/12/2023', valor: 'R$25,50'},
  {id: '130', pedido: 'X-Tudo', descricao: 'Sem picles', data: '05/12/2023', valor: 'R$25,50'}
]

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    NavegacaoLateralComponent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFormField,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatLabel,
    MatOption,
    MatRow,
    MatRowDef,
    MatSelect,
    MatTable,
    MatHeaderCellDef,
    MatInput,
    FaIconComponent,
    MatIconButton,
    MatPrefix
  ],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.scss'
})
export class RelatoriosComponent {
  dataAtual: string = new Date().toLocaleDateString();
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'pedido', 'descricao', 'data', 'valor'];
  filtroStatus: string = 'todos';
  protected readonly faSearch = faSearch;

  constructor(private route: Router) { }


  filtrarPorTexto(event: Event) {
    const input = event.target as HTMLInputElement;
    const termo = input.value.toLowerCase();
    this.aplicarFiltros(termo);
  }

  public aplicarFiltros(termoTexto: string = '') {
    this.dataSource = ELEMENT_DATA.filter(transacao => {
      const correspondeStatus = this.filtroStatus === 'todos' || transacao.descricao.toLowerCase() === this.filtroStatus;
      const correspondeTexto = termoTexto === '' ||
        transacao.id.includes(termoTexto) ||
        transacao.pedido.toLowerCase().includes(termoTexto) ||
        transacao.descricao.toLowerCase().includes(termoTexto) ||
        transacao.data.toLowerCase().includes(termoTexto) ||
        transacao.valor.toLowerCase().includes(termoTexto);

      return correspondeStatus && correspondeTexto;
    });
  }
}
