import { useEffect, useState } from "react";
import Table from "./Table";
import { useUsers } from "../../hooks/useUsers";
import CreateUserModal from "./CreateUserModal";
import { useQueryClient } from "@tanstack/react-query";
import { fetchRoles } from "../../services/fetchRoles";
import { fetchAuthorities } from "../../services/fetchAuthorities";

function Dashboard() {

    const [sideBarToogle, setSideBarToogle] = useState(false);
    const [isCreateUserModalOpen, toogleCreateUserModal] = useState(false);
    
    const queryClient = useQueryClient();

    useEffect(() => {
        queryClient.prefetchQuery({queryKey: ['fetch_roles'], queryFn: fetchRoles});
        queryClient.prefetchQuery({queryKey: ['fetch_authorities'], queryFn: fetchAuthorities});
    }, [queryClient]);

    const {data: users_data} = useUsers();

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

    const createUser = () => {
        toogleCreateUserModal(true);
    }

    const closeCreateUserModal = () => {
        toogleCreateUserModal(false);
    }

    media.addEventListener("change", handleSideBarToogle);
    
    console.log("Fetched Users", users_data);

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
            {
                isCreateUserModalOpen && <CreateUserModal closeModal={closeCreateUserModal}/>
            }
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
                            <button className="create__entity" onClick={() => createUser()}>
                                Create User
                            </button>
                        </div>
                        <hr className="bg-color-hr"></hr>
                        <div className="search">
                            <input placeholder="Search Users" />
                        </div>
                        <div className="overflow-scroll">
                            {users_data && <Table data={users_data} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Dashboard;