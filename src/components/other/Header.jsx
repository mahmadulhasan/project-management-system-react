import React from 'react'

const Header = ({name}) => {
  const Logout =()=> {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }
  return (
    <div>
      {/* Top Section */}
      <div className="dashboard-header">
                <h2>Hello,<br /> <b>{name} 👋</b> </h2>
                <button className="logout-button" onClick={Logout}>Logout</button>
            </div>

    </div>
  )
}

export default Header
