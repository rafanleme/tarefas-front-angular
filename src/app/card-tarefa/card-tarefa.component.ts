import { Component, Input } from '@angular/core';
import { Tarefa, TarefaService } from '../services/tarefa.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css']
})
export class CardTarefaComponent {

  @Input() tarefa?: Tarefa;

  constructor(private tarefaService: TarefaService){}

  excluir() {
    firstValueFrom(this.tarefaService.deletarPeloId(this.tarefa!.id));
  }
}
