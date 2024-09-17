import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { NgOptimizedImage } from "@angular/common";
import {Component, OnInit} from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBuilding, faLock, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatIcon,
    RouterLink,
    MatIconButton,
    FaIconComponent,
    MatPrefix
  ],
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss', '../../shared/scss/login.scss']
})
export class CriarContaComponent implements OnInit {
  criarContaForm!: FormGroup;
  protected readonly faBuilding = faBuilding;
  protected readonly faUser = faUser;
  protected readonly faLock = faLock;

  constructor() { }

  ngOnInit(): void {
    this.criarForm();
  }

  public criarForm() {
    this.criarContaForm = new FormBuilder().group({
      nomeEmpresa: [{value: '', disabled: true}],
      email: [{value: '', disabled: true}],
      senha: [{value: '', disabled: true}],
    })
  }

  public criarConta(form: FormGroup) { }
}
