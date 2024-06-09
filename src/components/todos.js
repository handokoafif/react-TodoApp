// src/services/todoService.js

const LOCAL_STORAGE_KEY = "todos";

const defaultTodos = [
  { id: 1, text: "HTML", done: true },
  { id: 2, text: "CSS", done: true },
  { id: 3, text: "React", done: false },
];

const getTodos = () => {
  const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!todos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultTodos));
    return defaultTodos;
  }
  return JSON.parse(todos);
};

const saveTodos = (todos) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const changeTodoStatus = (id) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });
  saveTodos(updatedTodos);
  return updatedTodos;
};

const deleteTodo = (id) => {
  const todos = getTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(updatedTodos);
  return updatedTodos;
};

const addTodo = (text) => {
  const todos = getTodos();
  const maxId =
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
  const newTodo = { id: maxId + 1, text, done: false };
  const updatedTodos = [...todos, newTodo];
  saveTodos(updatedTodos);
  return updatedTodos;
};

const getSortedTodos = () => {
  const todos = getTodos();
  return todos.sort((a, b) => a.done - b.done);
};

export { getTodos, changeTodoStatus, deleteTodo, addTodo, getSortedTodos };
