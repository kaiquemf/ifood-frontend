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
  id: number,
  tipo: string,
  valor: number,
  data: string,
  descricao: string,
}

const ELEMENT_DATA: TransacoesModel[] = [
  { id: 1, tipo: 'Receita', valor: 25.00, data: '01/09/23 12:30', descricao: 'Burger Clássico - Cliente: João Silva' },
  { id: 2, tipo: 'Receita', valor: 35.50, data: '01/09/23 13:15', descricao: 'Pizza Margherita - Cliente: Maria Souza' },
  { id: 3, tipo: 'Despesa', valor: 10.00, data: '01/09/23 14:00', descricao: 'embalagens' },
  { id: 4, tipo: 'Receita', valor: 18.00, data: '02/09/23 11:45', descricao: 'Salada Caesar - Cliente: Carlos Lima' },
  { id: 5, tipo: 'Receita', valor: 40.00, data: '02/09/23 12:00', descricao: 'Sushi Combo - Cliente: Ana Pereira' },
  { id: 6, tipo: 'Despesa', valor: 20.00, data: '02/09/23 13:30', descricao: 'ingredientes frescos' },
  { id: 7, tipo: 'Receita', valor: 15.00, data: '01/09/23 10:00', descricao: 'Smoothie Tropical - Cliente: Paula Gomes' },
  { id: 8, tipo: 'Receita', valor: 22.00, data: '03/09/23 11:30', descricao: 'Frango Grelhado com Legumes - Cliente: José Oliveira' },
  { id: 9, tipo: 'Receita', valor: 12.00, data: '03/09/23 12:15', descricao: 'Pastel de Queijo - Cliente: Fernanda Costa' },
  { id: 10, tipo: 'Despesa', valor: 30.00, data: '03/09/23 13:00', descricao: 'bebidas' },
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
  displayedColumns: string[] = ['id', 'tipo', 'valor', 'data', 'descricao'];
  public filtroSelecionado: string = 'todos';

  public filtrarTransacoes(tipo: string) {
    this.filtroSelecionado = tipo;
    if (tipo === 'todos') {
      this.dataSource = ELEMENT_DATA;
    } else {
      this.dataSource = ELEMENT_DATA.filter(transacao => transacao.tipo.toLowerCase() === tipo);
    }
  }

  public exportarCSV() {
    const csvData = this.converterParaCSV(this.dataSource);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);

    const nomeArquivo = this.getNomeArquivoExportado();

    const a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private getNomeArquivoExportado(): string {
    let tipo = this.filtroSelecionado !== 'todos' ? this.filtroSelecionado : '';
    tipo = tipo ? `_${tipo}` : '';
    return `transacoes${tipo}.csv`;
  }

  private converterParaCSV(data: TransacoesModel[]): string {
    const header = ['Id', 'Nome', 'Status', 'Data', 'Valor'];
    const rows = data.map(transacao => [transacao.id, transacao.tipo,
      transacao.valor, transacao.data, transacao.descricao]);

    let csvContent = header.join(',') + '\n';
    rows.forEach(rowArray => {
      let row = rowArray.join(',');
      csvContent += row + '\n';
    });

    return csvContent;
  }
}
