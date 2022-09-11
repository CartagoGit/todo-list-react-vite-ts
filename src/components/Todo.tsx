// INTERFACES
import { TodoAction, TodoItem } from "../types/types";

// PROPS TYPE
interface Props {
	todoList: TodoItem[];
	deleteTodo: (id: string) => void;
	updateTodo: (id: string) => void;
	// key: number; // La KEY y la REF no se pasan, son props especiales en REACT
	// children: JSX.Element; Se peude pasar un jsx desde el padre al hijo
}

export const Todo = ({ todoList, deleteTodo, updateTodo }: Props) => {
	return (
		<ul className="list-group">
			{todoList.map((oneTodo) => {
				return (
					<li
						key={oneTodo.id}
						className="list-group-item">
						<div className="row">
							<div className="col-8">
								<div className="row">
									<div className="col-6 justify-content-between d-flex flex-column">
										<div>{oneTodo.text}</div>
										<div>
											<input
												type="checkbox"
												name={"checkBox_" + oneTodo.id}
											/>
											<label
												className="ms-2 me-2"
												htmlFor={"checkBox_" + oneTodo.id}>
												Hecho
											</label>
										</div>
									</div>
									<div className="col-6">
										id: {oneTodo.id} <br />
										<p className="mb-0">{oneTodo.date}</p>
									</div>
								</div>
								{/* {oneTodo.task?.name} */}
							</div>
							<div className="col-4 justify-content-end d-flex align-items-center">
								<button onClick={() => deleteTodo(oneTodo.id)}>Eliminar</button>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
