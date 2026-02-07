import { ACCESS_TOKEN, CRM_USERS_ENDPOINT } from "../constants";

export async function fetchRoles() {
    return await fetch(`${CRM_USERS_ENDPOINT}/admin/roles`, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }).then(res => res.json());
}