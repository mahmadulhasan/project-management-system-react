import React from 'react'

const TaskListNumber = ({number}) => {
  return (
    <div>
      {/* Task Summary Section */}
      <div className="task-summary">
                <div className="task-card">
                    <h3>{number.newTask}</h3>
                    <p>New Tasks</p>
                </div>
                <div className="task-card">
                    <h3>{number.completed}</h3>
                    <p>Completed Tasks</p>
                </div>
                <div className="task-card">
                    <h3>{number.active}</h3>
                    <p>Active Tasks</p>
                </div>
                <div className="task-card">
                    <h3>{number.failed}</h3>
                    <p>Failed Tasks</p>
                </div>
            </div>

    </div>
  )
}

export default TaskListNumber
