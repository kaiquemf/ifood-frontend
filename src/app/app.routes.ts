import { Routes } from '@angular/router';

import { CriarContaComponent } from "./presentation/criar-conta/criar-conta.component";
import { DashboardComponent } from "./presentation/dashboard/dashboard.component";
import { LoginComponent } from "./presentation/login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent, title: "iFlow: Bem Vindo de Volta!" },
  { path: 'criar-conta', component: CriarContaComponent, title: "iFlow: Crie Sua Conta!"},
  { path: 'dashboard', component: DashboardComponent, title: "iFlow: Dashboard" },
];
