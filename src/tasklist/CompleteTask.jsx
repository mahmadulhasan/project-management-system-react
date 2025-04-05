import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="task-container bg-green-500">
      <div className="task-header">
        <h3 className="task-category">{data.category}</h3>
        <h4 className="task-date">{data.taskDate}</h4>
      </div>
      <h2 className="task-title">{data.taskTitle}</h2>
      <p className="task-description">{data.taskDescription}</p>
      <div className='mt-6'>
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Complete</button>
            </div>
    </div>
  );
};

export default CompleteTask;
