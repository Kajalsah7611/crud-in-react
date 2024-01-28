// Task.js
import React from 'react';
import '../App.css';

// Component for displaying an individual task
const Task = ({ task, onDelete, onEdit }) => {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // You can customize the date format as needed
  };

  return (
    <div className="task" title={formatDate(task.id)}>
    <span>{task.text}</span>
    <div className="task-buttons">
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>

      <button className="edit-button" onClick={() => onEdit(prompt('Enter new task:', task.text))}>
        Edit
      </button>
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

