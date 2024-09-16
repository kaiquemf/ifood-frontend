import { Routes } from '@angular/router';

import { LoginComponent } from "./presentation/login/login.component";
import {CriarContaComponent} from "./presentation/criar-conta/criar-conta.component";

export const routes: Routes = [
  { path: '', component: LoginComponent, title: "iFlow: Bem Vindo de Volta!" },
  { path: 'criar-conta', component: CriarContaComponent, title: "iFlow: Crie Sua Conta!"}
];
