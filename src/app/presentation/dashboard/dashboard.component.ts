import {Component, OnInit} from '@angular/core';
import { NgForOf } from "@angular/common";

import { NavegacaoLateralComponent } from "../../shared/presentation/navegacao-lateral/navegacao-lateral.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

export interface CardsModel {
  titulo: string,
  valor: string,
  descricao: string
}

const ELEMENT_DATA: CardsModel[] = [
  {titulo: 'Pedidos Totais', valor: '310', descricao: 'Aumento de 40%'},
  {titulo: 'Pedidos Bem Avaliados', valor: '270', descricao: 'Aumento de 67,7%'},
  {titulo: 'Pedidos Mal Avaliados', valor: '40', descricao: 'Diminuição de 20%'}
]

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavegacaoLateralComponent,
    NgForOf,
    NgxChartsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  dataAtual: string = new Date().toLocaleDateString();
  dataSource = ELEMENT_DATA;

  data: any[] = [];
  view: [number, number] = [640, 680];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Pedidos Totais';
  colorScheme = 'vivid';

  viewPizza: [number, number] = [480, 340];

  constructor() { }

  ngOnInit() {
    this.data = this.getData();
  }

  private getData() {
    return [
          { "name": "Junho", "value": 57 },
          { "name": "Julho", "value": 186 },
          { "name": "Agosto", "value": 310 },
    ]
  }
}
