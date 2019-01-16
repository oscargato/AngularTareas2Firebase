import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFireList<any>;

  constructor(private firebasedb:AngularFireDatabase) { }

  getTodoList(){
  	 return this.todoList = this.firebasedb.list('titles');
  }

  addTodo(tit:string){
  	 this.todoList.push({
  	 	title:tit,
  	 	isChecked:false
  	 });
  }

  updateTodo($key:string, flag:boolean){
  	 this.todoList.update($key,{isChecked:flag});
  }

  removeTodo($key:string){
  	 this.todoList.remove($key);
  }

}