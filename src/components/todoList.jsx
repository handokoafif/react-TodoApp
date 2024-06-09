// src/components/ToDoList.jsx
import React, { useState, useEffect } from "react";
import ToDoItem from "./todoItem";
import {
  getTodos,
  changeTodoStatus,
  deleteTodo,
  addTodo,
  getSortedTodos,
} from "./todos.js";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTodos());
  }, []);

  const handleAddTask = (newTask) => {
    if (newTask.trim()) {
      const newTasks = addTodo(newTask.trim());
      setTasks(newTasks);
    }
  };

  const handleRemoveTask = (id) => {
    const newTasks = deleteTodo(id);
    setTasks(newTasks);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = changeTodoStatus(id);
    setTasks(updatedTasks);
  };

  const handleSortTasks = () => {
    const sortedTasks = getSortedTodos();
    setTasks(sortedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-grow"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 ml-2"
          onClick={() => {
            const input = document.querySelector('input[type="text"]');
            handleAddTask(input.value);
            input.value = "";
          }}
        >
          Add
        </button>
        <button
          className="bg-green-500 text-white p-2 ml-2"
          onClick={handleSortTasks}
        >
          Sort
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onRemove={() => handleRemoveTask(task.id)}
            onToggleComplete={() => handleToggleComplete(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
