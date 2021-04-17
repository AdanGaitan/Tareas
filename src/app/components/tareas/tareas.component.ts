import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea[] = [];
  nombreTarea ='';

  constructor() { }

  ngOnInit(): void {


  }

  agregarTarea()
  {
    const tarea:Tarea={
      nombre:this.nombreTarea,
      estado:false
    }
    this.listTareas.push(tarea);

    this.nombreTarea = '';
  }
  eliminarTarea(index:number)
  {
    this.listTareas.splice(index,1);
  }

  actualizarTarea(tarea : Tarea,index : number)
  {
    this.listTareas[index].estado = !tarea.estado;
  }

}
