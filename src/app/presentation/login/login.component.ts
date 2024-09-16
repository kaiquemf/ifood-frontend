import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";

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
    MatIcon
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared/scss/login.scss']
})
export class LoginComponent implements OnInit {
  botaoIfood: boolean = false;
  loginFormGroup!: FormGroup;
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
      this.router.navigate(["/relatorios"], {skipLocationChange: true})
        .then(() => {
          this.snackBar.open("Acesso concedido!", '✖️');
        });
    } else {
      this.snackBar.open("Credenciais inválidas. Verifique seu email e senha.", '✖️');
      console.error('Credenciais inválidas. Verifique seu email e senha.');
    }
  }

}
