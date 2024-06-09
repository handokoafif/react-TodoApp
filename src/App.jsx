// src/App.jsx
import React from "react";
import ToDoList from "./components/todoList";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToDoList />
    </div>
  );
};

export default App;
