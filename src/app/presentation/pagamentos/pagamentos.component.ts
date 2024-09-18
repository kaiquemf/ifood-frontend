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
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {Router} from "@angular/router";
import {RegistrarPagamentoComponent} from "../registrar-pagamento/registrar-pagamento.component";

export interface TransacoesModel {
  id: string,
  nome: string,
  status: string,
  data: string,
  valor: string
}

const ELEMENT_DATA: TransacoesModel[] = [
  {id: '107', nome: 'Marcos Cesar', status: 'Pendente', data: '17/02/2024', valor: 'R$35,00'},
  {id: '12', nome: 'Carlos Cesar', status: 'Aprovado', data: '05/12/2023', valor: 'R$25,50'},
  {id: '11', nome: 'Carlos Cesar', status: 'Reprovado', data: '05/12/2023', valor: 'R$25,50'}
]

@Component({
  selector: 'app-pagamentos',
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
    RegistrarPagamentoComponent
  ],
  templateUrl: './pagamentos.component.html',
  styleUrl: './pagamentos.component.scss'
})
export class PagamentosComponent {
  dataAtual: string = new Date().toLocaleDateString();
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'nome', 'status', 'data', 'valor'];

  constructor() { }

  public filtrarTransacoes(status: string) {
    if (status === 'todos') {
      this.dataSource = ELEMENT_DATA;
    } else {
      this.dataSource = ELEMENT_DATA.filter(transacao => transacao.status.toLowerCase() === status);
    }
  }

  public adicionarPagamentoNaLista(novoPagamento: TransacoesModel) {
    this.dataSource = [...this.dataSource, novoPagamento];
  }
}
