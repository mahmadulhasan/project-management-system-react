import React from "react";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";

const AdminDashboard = () => {
  function logout(){
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className="admindashboard-container">
      {/* Header Section */}
      <div className="header">
        <h1>Hello <br /> <b>Admin 👋</b> </h1>
        <button onClick={logout} className="logout-btn">Log Out</button>
      </div>

      <CreateTask />

      <AllTask />
    </div>
  );
};

export default AdminDashboard;
