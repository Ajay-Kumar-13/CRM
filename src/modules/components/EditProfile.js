import { useAuthorities } from "../../hooks/useAuthorities";
import { useRoles } from "../../hooks/useRoles";

function EditProfile(props) {

    const {data: authorities} = useAuthorities();
    const {data: roles} = useRoles();
    const user = props.data;

    console.log("Editing user",user);
    console.log("Fetched Authorities", authorities);
    console.log("Fetched Roles", roles);

    const haveAuthoritiy = (authority) => {
        return props.data.authorities.some(
            permission => permission.name === authority
        );
    };
    
    
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
                            <h2>{user.username}</h2>
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
                                    {
                                        roles && roles.map(role => 
                                            <option>{role.roleName}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="update-permission__section">
                                <h3>Authorities</h3>
                                <div className="update__authorities">
                                    {
                                        authorities && authorities.map(authority => 
                                            <div className="update__authority">
                                                <label class="switch">
                                                    <input type="checkbox" checked={haveAuthoritiy(authority.authorityName)}/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <h3>{authority.authorityName}</h3>
                                            </div>
                                        )
                                    }
                                </div>
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
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;