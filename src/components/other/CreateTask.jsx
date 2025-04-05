import React, { useContext } from 'react'
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useState(localStorage.getItem('employee') || '[]');

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, settaskDescription] = useState('');

  const [newTask, setNewTask] = useState({})
  const submitHandeler =(e)=>{
    e.preventDefault()
     const newTask = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false };

     const data = JSON.parse(userData );

     data.forEach(function (elem) {
         if (assignee === elem.name) {
          elem.tasks.push(newTask);
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
         }
     });
     setUserData(JSON.stringify(data));
     localStorage.setItem('employee', userData);
     
     setTaskTitle('')
        setCategory('')
        setAssignee('')
        setDate('')
        settaskDescription('')
  }
  
  


  return (
    <form onSubmit={(e) => { submitHandeler(e) }}>
      <div>
        {/* Task Creation Form */}
        <div className="task-form">
          <div className="left-form">
            <label>Task Title</label>
            <input value={taskTitle} onChange={(e) => { setTaskTitle(e.currentTarget.value) }} type="text" placeholder="Make a UI Design" />

            <label>Date</label>
            <input value={taskDate} onChange={(e) => { setDate(e.currentTarget.value) }} type="date" />

            <label>Assign to</label>
            <input value={assignee} onChange={(e) => { setAssignee(e.currentTarget.value) }} type="text" placeholder='employee name' />

            <label>Category</label>
            <input value={category} onChange={(e) => { setCategory(e.currentTarget.value) }} type="text" placeholder="Design, dev, etc." />
          </div>

          <div className="right-form">
            <label>Description</label>
            <textarea value={taskDescription} onChange={(e) => { settaskDescription(e.currentTarget.value) }} placeholder="Enter task description"></textarea>
            <button type="submit" className="create-task-btn">Create Task</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CreateTask
