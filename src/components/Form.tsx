// HOOKS
import { useRef, useState } from "react";

interface Prop {
	createTodo: (text: string) => void;
}

export const Form = ({ createTodo }: Prop) => {
	const inputTodo = useRef<HTMLInputElement>(null);
	const [todoText, setTodoText] = useState<string>(() => "");
	const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (todoText === "") return;
		createTodo(todoText);
		e.currentTarget.reset();
		setTodoText(() => "");
		inputTodo.current?.focus();
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTodoText((t) => e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				className="me-2"
				type="text"
				name="newTodoInput"
				onChange={changeHandler}
				ref={inputTodo}
			/>
			<button
				type="submit"
				disabled={!todoText}>
				Crear Tarea
			</button>
		</form>
	);
};
