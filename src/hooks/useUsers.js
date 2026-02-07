import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/fetchUsers";

export function useUsers() {
    return useQuery({
        queryKey: ['fetch_users'],
        queryFn: fetchUsers
    })
}
