import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/fetchUsers";
import { ACCESS_TOKEN, CRM_USERS_ENDPOINT } from "../constants";

export function useUsers() {
    return useQuery({
        queryKey: ['fetch_users'],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 30
    })
}

export const CreateUser = () => {
    return useMutation({
        mutationFn: async(user) => {
            const res = await fetch(`${CRM_USERS_ENDPOINT}/admin/users/newuser`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                },
                body: user
            })

            if(!res.ok) throw new Error("Failed to create user!")
            return res.json();
        },
        onMutate: () => {
            // before request (optimistic update)
        },
        onSuccess: (data) => {
            // success toast
        },
        onError: (error) => {
            // error toast
        },
        onSettled: () => {
            // always runs
        }
    })
}