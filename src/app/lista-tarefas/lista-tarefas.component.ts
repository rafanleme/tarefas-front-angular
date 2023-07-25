import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  tarefas = [
    {
      titulo: "Estudar Typescript",
      data: new Date(),
      urgente: false
    },
    {
      titulo: "Estudar Spring",
      data: new Date(),
      urgente: true
    },
    {
      titulo: "Estudar Matemática",
      data: new Date(),
      urgente: true
    },
  ];

}
