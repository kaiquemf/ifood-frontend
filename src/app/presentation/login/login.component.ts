import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  botaoIfood: boolean = false;
  loginFormGroup!: FormGroup;
  credenciaisLogin = {email: 'admin@admin.com', senha: 'admin'};

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

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
      this.snackBar.open("Acesso concedido!", '✖️')
      console.log('Acesso concedido!');
    } else {
      this.snackBar.open("Credenciais inválidas. Verifique seu email e senha.", '✖️')
      console.error('Credenciais inválidas. Verifique seu email e senha.');
    }
  }

}
