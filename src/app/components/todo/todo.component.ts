import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoListArray: any[];

  constructor(private servicio:TodoService) { }

  ngOnInit() {
  	this.servicio.getTodoList().snapshotChanges().subscribe(item => {
  		this.todoListArray = [];
  		item.forEach(element=>{
  			let x = element.payload.toJSON();
  			x['$key'] = element.key;
  			this.todoListArray.push(x);
  		});
  	})
  }

  addTodo(itemTitle){
    if(itemTitle.value != ''){
        this.servicio.addTodo(itemTitle.value);
        itemTitle.value = '';
    }
  }

  updateTodo($key:string, isCheked:boolean){
    this.servicio.updateTodo($key,!isCheked);
  }

  deleteTodo($key:string){
    if(confirm('Desea Eliminar??')){
      this.servicio.removeTodo($key);  
    }
    
  }

}
