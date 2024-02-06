// Task.js
import React from "react";
import "../App.css";

// Component for displaying an individual task
const Task = ({ task, onDelete, onEdit }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // can customize the date format as needed
  };

  return (
    <div className="task" title={formatDate(task.id)}>
      <span>{task.text}</span>
      <div className="task-buttons">
        {/* <button className="delete-button" onClick={onDelete}>
        Delete
      </button> */}

        {/* <button className="edit-button" onClick={() => onEdit(prompt('Enter new task:', task.text))}>
        Edit
      </button> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square delete-button"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </div>
    </div>
  );
};
export default Task;

// 2. Task.js
// import React, { useState } from 'react';
// import '../App.css'; // Import the stylesheet

// const Task = ({ task, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(task.text);

//   const formatDate = (timestamp) => {
//         const date = new Date(timestamp);
//         return date.toLocaleString(); // You can customize the date format as needed
//       };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//     onEdit(editedText);
//   };

//   const handleInputChange = (e) => {
//     setEditedText(e.target.value);
//   };

//   return (
//     <div className="task" title={formatDate(task.id)}>
//       {isEditing ? (
//         <input type="text" value={editedText} onChange={handleInputChange} />
//       ) : (
//         <span>{task.text}</span>
//       )}
//       <div className="task-buttons">
//         {isEditing ? (
//           <button className="save-button" onClick={handleSaveClick}>
//             Save
//           </button>
//         ) : (
//           <button className="edit-button" onClick={handleEditClick}>
//             Edit
//           </button>
//         )}
//         <button className="delete-button" onClick={onDelete}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Task;
