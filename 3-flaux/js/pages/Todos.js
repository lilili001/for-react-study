import React from 'react';

import Todo from "../components/Todo";
import * as TodoActions from "../Actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component{
	constructor(){
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll()
		}
	}
	componentWillMount(){
		console.log('will mount');
		TodoStore.on('change', this.getTodos);
		console.log("count",TodoStore.listenerCount('change'))
	}
	componentWillUnmount(){
		console.log('unamount')
		TodoStore.removeListener('change',this.getTodos);
	}
	getTodos(){
		this.setState({
			todos:TodoStore.getAll()
		})
	}
	createTodo(){
		TodoActions.createTodo( Date.now() );
	}
	loadTodos(){
		TodoActions.loadTodos();
	}
    render(){
    	const {todos} = this.state;
    	const TodoComponents = todos.map((todo)=>{
    		return <Todo key={todo.id} {...todo} />
    	});
        return (
            <div>
            	<h1>Todos</h1>
            	<button onClick={this.createTodo.bind(this)}>Create!</button>
            	<button onClick={this.loadTodos.bind(this)}>Load!</button>
            	<ul>{TodoComponents}</ul>
            </div>
        );
    }
}