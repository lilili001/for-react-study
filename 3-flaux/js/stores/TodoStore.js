import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
				{
					id:1134567,
					text:"Go Shopping",
					complete:false
				},
				{
					id:1134568,
					text:"Pay Bills",
					complete:false
				}
		 	]  
		 
	}
	createTodo(text){
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete:false
		});

		this.emit('change');

	}
	getAll(){
		return this.todos;
	}
	handleActions(action){
		console.log('todoStore recieved an action:',action);
		switch(action.type){
			case "CREATE_TODO":
				todoStore.createTodo(action.text);
				break;
			case "RECEIVE_TODOS":
				 this.todos = action.todos;
				 this.emit('change');
		}
	}

}
const todoStore = new TodoStore;
dispatcher.register( todoStore.handleActions.bind(todoStore) );

window.dispatcher = dispatcher;//console打印 dispatcher.dispatcher({type:'',text:''})

window.todoStore = todoStore;//在console打印 todoStore.createTodo('test')试试

export default todoStore; 