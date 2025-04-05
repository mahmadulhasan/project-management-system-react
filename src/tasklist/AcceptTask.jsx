import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="task-container bg-red-500">
      <div className="task-header">
        <h3 className="task-category">{data.category}</h3>
        <h4 className="task-date">{data.taskDate}</h4>
      </div>
      <h2 className="task-title">{data.taskTitle}</h2>
      <p className="task-description">{data.taskDescription}</p>
      <div className="task-actions">
        <button className="task-completed">Mark as Completed</button>
        <button className="task-failed">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
