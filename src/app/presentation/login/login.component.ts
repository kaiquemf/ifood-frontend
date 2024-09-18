import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatLabel, MatPrefix } from "@angular/material/form-field";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterLink } from "@angular/router";
import { MatInput } from "@angular/material/input";
import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    NgOptimizedImage,
    RouterLink,
    MatIcon,
    FaIconComponent,
    MatPrefix,
    MatIconButton
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared/scss/login.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  protected readonly faUser = faUser;
  protected readonly faLock = faLock;
  credenciaisLogin = {email: 'admin@admin.com', senha: 'admin'};

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.criarLoginForm();
  }

  private criarLoginForm() {
    this.loginFormGroup = this.fb.group({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    })
  }

  public entrar(form: FormGroup) {

    if (form.value.email === this.credenciaisLogin.email && form.value.senha === this.credenciaisLogin.senha) {
      this.router.navigate(["/dashboard"], {skipLocationChange: true})
        .then(() => {
          this.snackBar.open("Acesso concedido!", '✖️', {duration: 2000});
        });
    } else {
      this.snackBar.open("Credenciais inválidas. Verifique seu email e senha.", '✖️', {duration: 2000});
    }
  }
}
