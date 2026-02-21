import React from "react";

function Roles() {
    return (
        <div className="background-gray">
            <div className="wrapper">
                <div className={`dashboard`}>
                    <button className="sidebar_toggle" id="sideBarToogle" aria-expanded="false">
                        <img src="images/collapse.svg" />
                    </button>
                    <div className="dashboard__menu-content">
                        <div className="dashboard__menu">
                            <ul>
                                <li className="search"><input placeholder="Search" /></li>
                                <li>Home</li>
                                <li className="active">Users</li>
                                <li>Roles</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu__dashboard">
                        <div className="dashboard__header">
                            <div className="users__statistics">
                                <h2>Role Management</h2>
                                <h3 className="total-users">Total Roles: {1}</h3>
                            </div>
                            <button className="create__entity">
                                Create User
                            </button>
                        </div>
                        <hr className="bg-color-hr"></hr>
                        <div className="search">
                            <input placeholder="Search Roles" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roles;