import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './AllTask.css';

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className="task-container2">
            <div className="task-header">
                <h2 className="task-column">Employee Name</h2>
                <h3 className="task-column">Email</h3>
                <h3 className="task-column">New Task</h3>
                <h5 className="task-column">Active Task</h5>
                <h5 className="task-column">Completed</h5>
                <h5 className="task-column">Failed</h5>
            </div>
            <div>
                {userData.map((elem, idx) => (
                    <div key={idx} className="task-row">
                        <h2 className="task-item name">{elem.name}</h2>
                        <h2 className="task-item name">{elem.email}</h2>
                        <h3 className="task-item new-task">{elem.taskCounts.newTask}</h3>
                        <h5 className="task-item active-task">{elem.taskCounts.active}</h5>
                        <h5 className="task-item completed">{elem.taskCounts.completed}</h5>
                        <h5 className="task-item failed">{elem.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
