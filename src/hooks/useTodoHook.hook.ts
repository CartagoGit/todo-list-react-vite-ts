//Hooks
import { useReducer } from "react";

// Types
import { TodoAction, TodoItem } from "../types/types";

// Deps
import { v4 as uuidv4 } from "uuid";

const todoReducer = (state: TodoItem[], action: TodoAction): TodoItem[] => {
	switch (action.type) {
		case "add":
			return [
				...state,
				{
					id: uuidv4(),
					text: action.payload.text,
					date: new Date().toLocaleDateString(),
					isDone: false,
				},
			];
		case "delete":
			return state.filter((todo: TodoItem) => todo.id !== action.payload.id);
		case "update":
			return state.map((todo: TodoItem) => {
				{
					if (todo.id === action.payload.id)
						return { ...todo, isDone: !todo.isDone };
					return todo;
					// return todo.isDone
					// 	? { ...todo, isDone: false }
					// 	: { ...todo, isDone: true };
				}
			});
		case "cleanDone":
			return state.filter((todo: TodoItem)=> todo.isDone === false) 
		default:
			return state;
	}
};

export const useTodoHook = (initState: TodoItem[] = []) =>
	useReducer(todoReducer, initState);
