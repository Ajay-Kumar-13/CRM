import { useEffect, useState } from "react";
import { useAuthorities } from "../../hooks/useAuthorities";
import { useRoles } from "../../hooks/useRoles";
import { CreateUser } from "../../hooks/useUsers";

function CreateUserModal(props) {
    const {data: roles_data} = useRoles();
    const {data: authorities_data} = useAuthorities();
    
    const [selectedAuthorities, setSelectedAuthorities] = useState([]);
    const [payload, setPayload] = useState({
        email: "",
        firstName: "",
        lastName: "",
        roleId: "",
        password: ""
    });

    const handleInput = (e) => {
        const {name, value} = e.target; 
        setPayload(prev => ({...prev, [name]: value}));        
    };

    const handleAuthorities = (authorityId) => {
        setSelectedAuthorities(prev => prev.includes(authorityId) ? prev.filter(authId => authId !== authorityId) : [...prev, authorityId]);
   };

   const createUser = CreateUser();

    const createNewUser = () => {
        const user_payload = {
            username: payload.firstName,
            password: payload.password,
            roleId: payload.roleId
        }
        createUser.mutate(user_payload);
    }

    return (
        <div className="modal-overlay create_user" onClick={props.closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>ADD USER</h2>
                </div>
                <div className="modal__body justify-items-vertically">
                    <div className="user__email">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" name="email" onChange={handleInput}></input>
                    </div>
                    <div className="user__name">
                        <div>
                            <label htmlFor="first_name">FIRST NAME</label>
                            <input type="text" className="first_name" name="firstName" onChange={handleInput} id="first_name"></input>
                        </div>
                        <div>
                            <label htmlFor="last_name">LAST NAME</label>
                            <input type="text" className="last_name" name="lastName" id="last_name" onChange={handleInput}></input>
                        </div>
                    </div>
                    <div className="user__role">
                        <label htmlFor="select__role">ORGANIZATION ROLE</label>
                        <select className="select__role" name="roleId" id="select__role" value={payload.roleId} onChange={handleInput}>
                            <option value="" disabled>
                                Select a role
                            </option>
                            {
                                roles_data && roles_data.map(role => 
                                    <option  key={role.roleId} value={role.roleId}>{role.roleName}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="authorities">
                        <div>
                            <h2>Authorities</h2>
                        </div>
                        <div className="update__authorities">  
                            {
                                authorities_data && authorities_data.map(authority => 
                                    <div className="update__authority">
                                        <label class="switch">
                                            <input type="checkbox" onChange={() => handleAuthorities(authority.authorityId)}/>
                                            <span class="slider round"></span>
                                        </label>
                                        <h3>{authority.authorityName}</h3>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="security__settings">
                        <h2>Security Settings</h2>
                        <div className="password__management">
                            <div className="checkbox_div">
                                <input type="checkbox" />
                                <h3>Autogenerate password</h3>
                            </div>
                            
                            <input type="password" onChange={handleInput} name="password" placeholder="Set Password"></input>
                            
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
                    <button className="background-blue save__changes" onClick={createNewUser}>
                        Create User
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal;