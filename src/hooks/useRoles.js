import { useQuery } from "@tanstack/react-query";
import { fetchRoles } from "../services/fetchRoles";

export function useRoles() {
    return useQuery({
        queryKey: ['fetch_roles'],
        queryFn: fetchRoles,
        staleTime: 1000 * 60 * 30
    })
}