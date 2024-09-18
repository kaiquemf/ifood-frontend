import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

export interface TransacoesModel {
  id: string;
  nome: string;
  status: string;
  data: string;
  valor: string;
}

@Component({
  selector: 'app-registrar-pagamento',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './registrar-pagamento.component.html',
  styleUrl: './registrar-pagamento.component.scss'
})
export class RegistrarPagamentoComponent {
  novoPagamento: Partial<TransacoesModel> = {
    nome: '',
    data: '',
    valor: '',
    status: 'Pendente'
  };

  @Output() pagamentoAdicionado = new EventEmitter<TransacoesModel>();

  adicionarPagamento() {
    const novoId = Math.floor(Math.random() * 1000).toString();
    const novoPagamentoCompleto: TransacoesModel = {
      ...this.novoPagamento,
      id: novoId,
      status: 'Pendente'
    } as TransacoesModel;

    this.pagamentoAdicionado.emit(novoPagamentoCompleto);

    this.novoPagamento = { nome: '', data: '', valor: '', status: 'Pendente' };
  }
}
