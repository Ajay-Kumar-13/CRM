import { useQuery } from "@tanstack/react-query";
import { fetchAuthorities } from "../services/fetchAuthorities";

export const useAuthorities = () => {
    return useQuery({
        queryKey: ['fetch_authorities'],
        queryFn: fetchAuthorities
    })
}