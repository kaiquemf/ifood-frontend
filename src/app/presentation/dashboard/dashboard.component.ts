import {Component, HostListener, OnInit} from '@angular/core';
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
  maxViewBarras: [number, number] = [640, 680];
  minViewBarras: [number, number] = [320, 160];
  viewBarras: [number, number] = [...this.maxViewBarras];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Pedidos Totais';
  colorSchemeBarras = 'vivid';

  maxViewPizza: [number, number] = [680, 680];
  minViewPizza: [number, number] = [320, 160];
  viewPizza: [number, number] = [...this.maxViewPizza];
  dataPizza: any[] = [
    {"name": "Saldo Atual", "value": 107},
    {"name": "Receitas", "value": 167},
    {"name": "Despesas", "value": 60}
  ];
  showLegend = true;
  colorSchemePizza = 'fire';

  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ajustarTamanhoGraficos();
  }

  private ajustarTamanhoGraficos() {
    const larguraTela = window.innerWidth;

    const proporcao = Math.min(1, Math.max(0, (larguraTela - 320) / (1024 - 320)));

    this.viewBarras = [
      this.minViewBarras[0] + (this.maxViewBarras[0] - this.minViewBarras[0]) * proporcao,
      this.minViewBarras[1] + (this.maxViewBarras[1] - this.minViewBarras[1]) * proporcao
    ] as [number, number];

    this.viewPizza = [
      this.minViewPizza[0] + (this.maxViewPizza[0] - this.minViewPizza[0]) * proporcao,
      this.minViewPizza[1] + (this.maxViewPizza[1] - this.minViewPizza[1]) * proporcao
    ] as [number, number];
  }
}
