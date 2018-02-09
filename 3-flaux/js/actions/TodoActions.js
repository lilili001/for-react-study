import dispatcher from "../dispatcher";

export function createTodo(text){
	dispatcher.dispatch({
		type:'CREATE_TODO',
		text
	})
}
export function loadTodos(text){
	//axios ajax
	dispatcher.dispatch({
		type:'FETCH_TODOS',
		text
	})

	setTimeout(()=>{
		dispatcher.dispatch({
			type:'RECEIVE_TODOS',
			todos:[
				{
					id:11345237,
					text:"Go Shopping Again",
					complete:false
				},
				{
					id:113454568,
					text:"Pay Bills Again",
					complete:false
				}
			]
		})

		if(false){
			dispatcher.dispatch({
				type:'FETCH_TODOS_ERRORS'
			})
		}

	},1000);
}
export function deleteTodos(){
	dispatcher.dispatch({
		type:'DELETE_TODO',
		id
	})
}