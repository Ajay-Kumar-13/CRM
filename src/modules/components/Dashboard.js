import { useQuery } from "@tanstack/react-query";
import { CRM_USERS_ENDPOINT, ACCESS_TOKEN } from "../../constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

function Dashboard() {

    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [authorities, setAuthorities] = useState([]);
    const [sideBarToogle, setSideBarToogle] = useState(false);

    const navigate = useNavigate();

    const media = window.matchMedia("(width < calc(1000 / 16 * 1rem))");

    const updateSidebarToogle = () => {
        if(sideBarToogle) {
            document.getElementById("sideBarToogle").setAttribute("aria-expanded", "false");
            setSideBarToogle(false);
        } else {
            document.getElementById("sideBarToogle").setAttribute("aria-expanded", "true");
            setSideBarToogle(true);
        }
    }

    const updateSideBar = () => {
        document.getElementById("sideBarToogle").setAttribute("aria-expanded", "false");
    }

    const handleSideBarToogle = () => {
        if(!media.matches) {
            updateSideBar();
        }
    }

    media.addEventListener("change", handleSideBarToogle);

    const {
        isPending: usersPending,
        error: usersError,
        data: users_data
    } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`${CRM_USERS_ENDPOINT}/admin/users`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }).then(res => res.json())
    });

    const {
        isPending: rolesPending,
        error: rolesError,
        data: roles_data
    } = useQuery({
        queryKey: ["roles"],
        queryFn: () =>
            fetch(`${CRM_USERS_ENDPOINT}/admin/roles`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }).then(res => res.json())
    });

        const {
        isPending: authoritiesPending,
        error: authoritiesError,
        data: authorities_data
    } = useQuery({
        queryKey: ["authorities"],
        queryFn: () =>
            fetch(`${CRM_USERS_ENDPOINT}/admin/authorities`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }).then(res => res.json())
    });

    const handleUsers = () => {
        navigate("/users")
    }

    useEffect(() => {
        if (users_data) {
            setUsers(users_data);
        }

        if(roles_data) {
            setRoles(roles_data);
        }
        if(authorities_data) {
            setAuthorities(authorities_data);
        }
    }, [users_data, roles_data, authorities_data]);
    
    console.log("Fetched Users", users_data);
    console.log("Fetched Roles", roles_data);
    console.log("Fetched Authorities", authorities_data);
    
    const mock_Data = [
    {
        id: "86521719-1aa5-499d-aa02-daaecbb07986",
        username: "superuser",
        role: {
        id: "df02ec18-01a7-4cd9-aefb-da90bbf544df",
        name: "ADMIN"
        },
        authorities: [
        { id: "26b8fee6-2bb6-4dd5-8775-2370bdef63f5", name: "CREATE" },
        { id: "39290a88-0d6f-416f-9297-a7fc00ee74b0", name: "READ" }
        ]
    }
    ];


    return (
        <div className="background-gray">
            <div className="wrapper">
                <div className={`dashboard`}>
                    <button className="sidebar_toggle" id="sideBarToogle" onClick={updateSidebarToogle} aria-expanded="false">
                        <img src="images/collapse.svg" />
                    </button>
                    <div className="dashboard__menu-content">
                        <div className="dashboard__menu">
                            <ul>
                                <li className="search"><input placeholder="Search" /></li>
                                <li>Home</li>
                                <li className="active">Users</li>
                                <li>Roles & Authorities</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu__dashboard">
                        <div className="dashboard__header">
                            <div className="users__statistics">
                                <h2>User Management</h2>
                                <h3 className="total-users">Total Users: {1}</h3>
                            </div>
                            <button className="create__entity">
                                Create User
                            </button>
                        </div>
                        <hr class="bg-color-hr"></hr>
                        <div className="search">
                            <input placeholder="Search Users" />
                        </div>
                        <div className="overflow-scroll">
                            {mock_Data && <Table data={mock_Data} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Dashboard;