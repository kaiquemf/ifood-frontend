import {Component, OnInit} from '@angular/core';
import { NgForOf } from "@angular/common";

import { NavegacaoLateralComponent } from "../../shared/presentation/navegacao-lateral/navegacao-lateral.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

export interface CardsModel {
  titulo: string,
  valor: number,
  descricao: string,
}

const ELEMENT_DATA: CardsModel[] = [
  {titulo: 'Saldo Atual', valor: 107.50, descricao: 'Aumento de 40%'},
  {titulo: 'Receitas', valor: 167.50, descricao: 'Aumento de 67,7%'},
  {titulo: 'Despesas', valor: 60, descricao: 'Diminuição de 20%'}
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

  dataBarras: any[] = [
    { "name": "Junho", "value": 57 },
    { "name": "Julho", "value": 65 },
    { "name": "Agosto", "value": 89 },
  ];
  viewBarras: [number, number] = [640, 680];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Pedidos Totais';
  colorSchemeBarras = 'vivid';

  dataPizza: any[] = [
    {"name": "Saldo Atual", "value": 107},
    {"name": "Receitas", "value": 167},
    {"name": "Despesas", "value": 60}
  ];
  viewPizza: [number, number] = [480, 340];
  showLegend = true;
  colorSchemePizza = 'fire';

  constructor() { }

  ngOnInit() { }
}
