import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { NgOptimizedImage } from "@angular/common";
import { MatInput } from "@angular/material/input";
import { Component, OnInit } from '@angular/core';

export interface RelatoriosModel {
  id: string,
  descricao: string,
  status: string,
  dataCriacao: string,
  duracao: string,
  prioridade: string,
  usuario: string,
}

const ELEMENT_DATA: RelatoriosModel[] = [
  {id: '1', descricao: 'Entrega de Pedido', status: 'Finalizado', dataCriacao: '05/09/2024', duracao: '00:40', prioridade: 'Alta', usuario: 'Teste'},
  {id: '2', descricao: 'Entrega de Pedido', status: 'Finalizado', dataCriacao: '05/09/2024', duracao: '00:32', prioridade: 'Alta', usuario: 'Teste'},
];

@Component({
  selector: 'app-pagina-relatorios',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatColumnDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './pagina-relatorios.component.html',
  styleUrl: './pagina-relatorios.component.scss'
})
export class PaginaRelatoriosComponent implements OnInit {
  formPesquisa!: FormGroup;
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'descricao', 'status', 'dataCriacao', 'duracao', 'prioridade', 'usuario'];

  constructor() { }

  ngOnInit() {
    this.criarFormPesquisa();
  }

  private criarFormPesquisa() {
    this.formPesquisa = new FormBuilder().group({
      pesquisa: [{value: '', disabled: true}],
      dataCriacao: [{value: '', disabled: true}],
      status: [{value: '', disabled: true}],
      prioridade: [{value: '', disabled: true}],
    })
  }
}
