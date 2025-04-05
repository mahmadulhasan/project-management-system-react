import React from 'react'
import AcceptTask from '../../tasklist/AcceptTask'
import NewTask from '../../tasklist/NewTask'
import CompleteTask from '../../tasklist/CompleteTask'
import FailedTask from '../../tasklist/FailedTask'

const TaskList = ({ tasks }) => {
  return (
    <div>
      <div className="task-sec">
        {/* Task Details Sections */}
        {tasks.map((elem, idk) => {
          if (elem.active) {
            return <AcceptTask key={idk} data={elem} />
          }
          if (elem.newTask) {
            return <NewTask key={idk} data={elem} />
          }
          if (elem.completed) {
            return <CompleteTask key={idk}  data={elem} />
          }
          if (elem.failed) {
            return <FailedTask key={idk} data={elem} />
          }
        })}

      </div>
    </div>
  )
}

export default TaskList
