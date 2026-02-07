import React from "react";
import { ACCESS_TOKEN, CRM_USERS_ENDPOINT } from "../constants";

export const fetchAuthorities = async () => {
    const res = await fetch(`${CRM_USERS_ENDPOINT}/admin/authorities`, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    });
    return await res.json();
}