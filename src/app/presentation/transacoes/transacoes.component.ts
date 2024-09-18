import { Component } from '@angular/core';

import { NavegacaoLateralComponent } from "../../shared/presentation/navegacao-lateral/navegacao-lateral.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

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
  selector: 'app-transacoes',
  standalone: true,
  imports: [
    NavegacaoLateralComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatSelect,
    MatOption,
    MatButton
  ],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent {
  dataAtual: string = new Date().toLocaleDateString();
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'nome', 'status', 'data', 'valor'];

  public filtrarTransacoes(status: string) {
    if (status === 'todos') {
      this.dataSource = ELEMENT_DATA;
    } else {
      this.dataSource = ELEMENT_DATA.filter(transacao => transacao.status.toLowerCase() === status);
    }
  }

  public exportarCSV() {
    const csvData = this.converterParaCSV(this.dataSource);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transacoes_filtradas.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private converterParaCSV(data: TransacoesModel[]): string {
    const header = ['Id', 'Nome', 'Status', 'Data', 'Valor'];
    const rows = data.map(transacao => [transacao.id, transacao.nome, transacao.status, transacao.data, transacao.valor]);

    let csvContent = header.join(',') + '\n';
    rows.forEach(rowArray => {
      let row = rowArray.join(',');
      csvContent += row + '\n';
    });

    return csvContent;
  }
}
