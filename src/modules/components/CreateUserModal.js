function CreateUserModal(props) {
    return (
        <div className="modal-overlay create_user" onClick={props.closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>ADD USER</h2>
                </div>
                <div className="modal__body justify-items-vertically">
                    <div className="user__email">
                        <label for="email">EMAIL</label>
                        <input type="email" id="email"></input>
                    </div>
                    <div className="user__name">
                        <div>
                            <label for="first_name">FIRST NAME</label>
                            <input type="text" className="first_name" id="first_name"></input>
                        </div>
                        <div>
                            <label for="last_name">LAST NAME</label>
                            <input type="text" className="last_name" id="last_name"></input>
                        </div>
                    </div>
                    <div className="user__role">
                        <label for="select__role">ORGANIZATION ROLE</label>
                        <select className="select__role" id="select__role">
                            <option>ADMIN</option>
                        </select>
                    </div>
                    <div className="authorities">
                        <div>
                            <h2>Authorities</h2>
                        </div>
                        <div className="update__authorities">  
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>CREATE</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>READ</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>UPDATE</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>DELETE</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>CREATE</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>READ</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>UPDATE</h3>
                            </div>
                            <div className="update__authority">
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <h3>DELETE</h3>
                            </div>
                        </div>
                    </div>
                    <div className="security__settings">
                        <h2>Security Settings</h2>
                        <div className="password__management">
                            <div className="checkbox_div">
                                <input type="checkbox" />
                                <h3>Autogenerate password</h3>
                            </div>
                            
                            <input type="password" placeholder="Set Password"></input>
                            
                            <div className="checkbox_div">
                                <input type="checkbox" />
                                <h3>Activate Account</h3>
                            </div>
                        </div>
                    </div>
                </div>

                

                <hr></hr>
                <div className="modal__footer">
                    <button onClick={props.closeModal}>
                        Cancel
                    </button>
                    <button className="background-blue save__changes">
                        Create User
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal;