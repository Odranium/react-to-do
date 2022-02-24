import React from "react";
import "./App.css";

// TODO : Ajouter un backend Node.js / Express et une BDD Mongo Atlas afin de rendre les données persistantes

// Permet d'afficher les Todo
function Todo({ todo, index, completeTodo, deleteTodo }) {
	return (
		<div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
}

// Formulaire permettant d'ajouter des ToDo
function TodoForm({ addTodo }) {
	const [value, setValue] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
		</form>
	);
}

function App() {
	const [todos, setTodos] = React.useState([
		{
			text: "Learn about React",
			isCompleted: false,
		},
		{
			text: "Meet friend for lunch",
			isCompleted: false,
		},
		{
			text: "Build really cool todo app",
			isCompleted: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;
		setTodos(newTodos);
	};

	const deleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
