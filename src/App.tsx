// HOOKS
// import { useState, useReducer } from "react";
import { useTodoHook } from "./hooks/useTodoHook.hook";

// STYLES
import "./App.css";

// COMPONENTS
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";

// INTERFACES / TYPES
import { TodoItem } from "./types/types";

// ID random
import { v4 as uuidv4 } from "uuid";

const App = () => {
	// const [todoList, setTodoList] = useState<TodoItem[]>(initTodos);

	// const [todoList, dispatch] = useReducer(useTodoHook(initTodos), initTodos);
	const [todoList, dispatch] = useTodoHook(initTodos);

	const createTodo = (newTodoText: string): void => {
		dispatch({ type: "add", payload: { text: newTodoText } });
	};
	const deleteTodo = (id: string): void => {
		dispatch({ type: "delete", payload: { id } });
	};
	const updateTodo = (id: string): void => {
		dispatch({ type: "update", payload: { id } });
	};

	return (
		<div className="App">
			<h1>Lista de Tareas usando Hooks</h1>
			<hr />
			<Form createTodo={createTodo} />
			<hr />
			<Todo
				todoList={todoList}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
			/>
			<button
				type="button"
				className="mt-2"
				onClick={() => {}}>
				Eliminar Tareas hechas
			</button>
		</div>
	);
};

const initTodos: TodoItem[] = [
	{
		date: new Date().toLocaleDateString(),
		id: uuidv4(),
		isDone: false,
		text: "Learn more JS",
		task: {
			name: "Aprender la ultima expansion",
		},
	},
	{
		date: new Date().toLocaleDateString(),
		id: uuidv4(),
		isDone: false,
		text: "Learn more REACT",
	},
	{
		date: new Date().toLocaleDateString(),
		id: uuidv4(),
		isDone: false,
		text: "Learn more Angular",
	},
];

export default App;
