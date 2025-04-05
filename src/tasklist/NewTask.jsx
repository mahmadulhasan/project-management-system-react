import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="task-container bg-blue-400">
      <div className="task-header">
        <h3 className="task-category">{data.category}</h3>
        <h4 className="task-date">{data.taskDate}</h4>
      </div>
      <h2 className="task-title">{data.taskTitle}</h2>
      <p className="task-description">{data.taskDescription}</p>
      <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
    </div>
  );
};

export default NewTask;
