export interface TodoItem {
	date: string;
	id: string;
	isDone: boolean;
	text: string;
	task?: {
		name: string;
	};
}

export type TodoAction = TodoAdd | TodoDelete | TodoUpdate;

interface TodoAdd {
	type: "add";
	payload: {
		text: string;
	};
}

interface TodoDelete {
	type: "delete";
	payload: {
		id: string;
	};
}

interface TodoUpdate {
	type: "update";
	payload: {
		id: string;
	};
}
