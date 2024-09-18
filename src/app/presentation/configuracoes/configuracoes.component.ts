import { Component } from '@angular/core';
import {NavegacaoLateralComponent} from "../../shared/presentation/navegacao-lateral/navegacao-lateral.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [
    NavegacaoLateralComponent,
    FaIconComponent
  ],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent {
  dataAtual: string = new Date().toLocaleDateString();
  protected readonly faX = faX;
}
