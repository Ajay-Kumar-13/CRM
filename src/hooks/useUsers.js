import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(user) => {
            console.log("Request Payload: ",user);
            
            const res = await fetch(`${CRM_USERS_ENDPOINT}/admin/users/newuser`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                },
                body: JSON.stringify(user)
            })

            if(!res.ok) throw new Error("Failed to create user!")
            return res.json();
        },
        onMutate: () => {
            // before request (optimistic update)
        },
        onSuccess: (data) => {
            // success toast
            queryClient.invalidateQueries({
                queryKey: ["fetch_users"]
            })
        },
        onError: (error) => {
            // error toast
        },
        onSettled: () => {
            // always runs
        }
    })
}