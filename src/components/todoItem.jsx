// src/components/ToDoItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoItem = ({ task, onRemove, onToggleComplete }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 mb-2 rounded cursor-pointer ${
        task.done ? "bg-gray-300 line-through" : "bg-gray-100"
      }`}
      onClick={onToggleComplete}
    >
      <span className="flex-grow">{task.text}</span>
      <button
        className="bg-red-500 text-white p-2 rounded ml-4"
        onClick={(e) => {
          e.stopPropagation(); // Prevent toggle complete on button click
          onRemove();
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default ToDoItem;
