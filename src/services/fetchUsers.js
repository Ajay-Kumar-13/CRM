import { ACCESS_TOKEN, CRM_USERS_ENDPOINT } from "../constants"

export const fetchUsers = async () => {
    const res = await fetch(`${CRM_USERS_ENDPOINT}/admin/users`, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    })
    return await res.json()
}