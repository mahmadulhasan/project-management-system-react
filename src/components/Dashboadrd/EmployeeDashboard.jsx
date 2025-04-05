
import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../other/TaskList";

const EmployeeDashboard = ({data}) => {
    console.log(data)
    return (
        <div className="dashboard-container">
            <Header name= {data.name}/>
            <TaskListNumber number = {data.taskCounts}/>
            <TaskList tasks= {data.tasks}/>


        </div>
    );
};

export default EmployeeDashboard;
