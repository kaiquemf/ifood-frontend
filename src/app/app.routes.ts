import { Routes } from '@angular/router';

import { ConfiguracoesComponent } from "./presentation/configuracoes/configuracoes.component";
import { CriarContaComponent } from "./presentation/criar-conta/criar-conta.component";
import { TransacoesComponent } from "./presentation/transacoes/transacoes.component";
import { PagamentosComponent } from "./presentation/pagamentos/pagamentos.component";
import { RelatoriosComponent } from "./presentation/relatorios/relatorios.component";
import { DashboardComponent } from "./presentation/dashboard/dashboard.component";
import { LoginComponent } from "./presentation/login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent, title: "iFlow: Bem Vindo de Volta!" },
  { path: 'criar-conta', component: CriarContaComponent, title: "iFlow: Crie Sua Conta!"},
  { path: 'dashboard', component: DashboardComponent, title: "iFlow: Dashboard" },
  { path: 'transacoes', component: TransacoesComponent, title: "iFlow: Transacoes" },
  { path: 'pagamentos', component: PagamentosComponent, title: "iFlow: Pagamentos" },
  { path: 'relatorios', component: RelatoriosComponent, title: "iFlow: Relatorios" },
  { path: 'configuracoes', component: ConfiguracoesComponent, title: "iFlow: Configuracoes" },
];
