import React from "react";

function EditProfile(props) {
    return (
        <div className="modal-overlay" onClick={props.closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>Edit Profile</h2>
                </div>
                <div className="modal__header-body">
                    <div className="user__details">
                        <div className="profile-pic">
                            <img src="/images/Rukmini Maharani.jpeg" />
                        </div>
                        <div className="profile-content">
                            <h2>Rukmini</h2>
                            <p className="email">rukmini@gmail.com</p>
                        </div>
                    </div>
                    <div className="danzer-zone">
                        <button className="red__outline-btn">De-Activate</button>
                    </div>
                </div>
                <hr></hr>
                <div className="modal__body">
                    <div className="account__details">
                        <div>
                            <h3>Account Status</h3>
                            <div className="account__status badge">
                                    Active
                            </div>
                        </div>
                        <div>
                            <h3>Current Role</h3>
                            <div className="current__role badge">
                                Admin
                            </div>
                        </div>
                    </div>
                    <div className="user__permissions">
                        <h2>Permissions</h2>
                        <div className="controls">
                            <div className="update-permission__section">
                                <h3>Update Role</h3>
                                <select>
                                    <option>Admin</option>
                                    <option>User</option>
                                    <option>Manager</option>
                                </select>
                            </div>
                            <div className="update-permission__section">
                                <h3>Authorities</h3>
                                <div className="update__authorities">
                                    <div className="update__authority">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                        <h3>CREATE</h3>
                                    </div>
                                    <div className="update__authority">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                        <h3>READ</h3>
                                    </div>
                                    <div className="update__authority">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                        <h3>UPDATE</h3>
                                    </div>
                                    <div className="update__authority">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                        <h3>DELETE</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="modal__footer">
                    <button >
                        Cancel
                    </button>
                    <button className="background-blue save__changes">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;