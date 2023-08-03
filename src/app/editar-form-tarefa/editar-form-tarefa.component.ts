import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Tarefa, TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-editar-form-tarefa',
  templateUrl: './editar-form-tarefa.component.html',
  styleUrls: ['./editar-form-tarefa.component.css']
})
export class EditarFormTarefaComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.checkoutForm = this.formBuilder.group({
      descricao: '',
      data: '',
      urgente: false
    });
  }

  async ngOnInit(): Promise<void> {
    //recuperando o id da tarefa da URL
    const routeParams = this.route.snapshot.paramMap;
    const tarefaId = routeParams.get("tarefaId");

    if(tarefaId){
      const tarefa = await firstValueFrom(this.tarefaService.buscarPorId(tarefaId));
      this.checkoutForm.setValue({
        descricao: tarefa.descricao,
        data: tarefa.data,
        urgente: tarefa.urgente
      });
    }
  }

  async salvarTarefa() {
    console.log(this.checkoutForm.value);
  }
  
}
