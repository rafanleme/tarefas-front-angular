import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-editar-form-tarefa',
  templateUrl: './editar-form-tarefa.component.html',
  styleUrls: ['./editar-form-tarefa.component.css']
})
export class EditarFormTarefaComponent {

  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      descricao: '',
      data: '',
      urgente: false
    });
  }

  async salvarTarefa() {
    await firstValueFrom(this.tarefaService.adicionar(this.checkoutForm.value));
    alert("Tarefa add com sucesso");
    this.router.navigate([""]);
  }
  
}
