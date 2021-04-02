import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'

const initialState = {
	todos     : {
		'todo-1' : {
			id        : 'todo-1',
			content   : 'Watch Next.js crash course',
			completed : false
		},
		'todo-2' : {
			id        : 'todo-2',
			content   : 'Wacth Star Wars',
			completed : false
		},
		'todo-3' : {
			id        : 'todo-3',
			content   : 'Create tutorials',
			completed : false
		}
	},
	columns   : {
		'column-1' : {
			id       : 'column-1',
			title    : 'ToDo',
			todosIds : [ 'todo-1', 'todo-2', 'todo-3' ]
		},
		'column-3' : {
			id       : 'column-3',
			title    : 'Completed',
			todosIds : []
		}
	},
	columnIds : [ 'column-1', 'column-3' ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState)

	const onDragEnd = ({ destination, source, draggableId }) => {
		if (!destination) return
		if (destination.droppableId === source.droppableId && destination.index === source.index) return

		dispatch({
			type    : 'MOVE_TODO',
			payload : {
				destination,
				source,
				draggableId
			}
		})
	}
	const deleteTodo = (todoId, columnId) => {
		dispatch({
			type    : 'DELETE_TODO',
			payload : {
				todoId,
				columnId
			}
		})
	}
	const addTodo = (content, id) => {
		dispatch({
			type    : 'ADD_TODO',
			payload : {
				id,
				content,
				completed : false
			}
		})
	}
	return (
		<GlobalContext.Provider
			value={{
				todos      : state.todos,
				columns    : state.columns,
				columnIds  : state.columnIds,
				deleteTodo,
				addTodo,
				onDragEnd
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
