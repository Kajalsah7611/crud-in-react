// TodoList.js
import React, { useState } from 'react';
import Task from './Task';
import '../App.css'; // Import the stylesheet

const TodoList = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State for the new task input
  const [newTask, setNewTask] = useState('');

  // Handle input change in the task input field
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      // Update the tasks state with a new task
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      // Clear the input field after adding the task
      setNewTask('');
    }
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    // Filter out the task with the given ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the tasks state with the filtered tasks
    setTasks(updatedTasks);
  };

  // Function to edit a task in the list
  const editTask = (taskId, newText) => {
    // Map over tasks to find the task with the given ID
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    // Update the tasks state with the edited task
    setTasks(updatedTasks);
  };

  return (
     <div className="todo-container">
    <h1>Todo List</h1>
    <div className="input-row">
      <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add a new task" />
      <button className="add-button" onClick={addTask}>Add Task</button>
    </div>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} onEdit={(newText) => editTask(task.id, newText)} />
    ))}
  </div>
);
};

export default TodoList;
