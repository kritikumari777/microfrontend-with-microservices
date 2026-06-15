import { useQuery } from "@tanstack/react-query"
import { baseURL } from "../../axios/axios"

export const useApiQuery = (
    queryKey,
    endpoint,
    options = {}
) => {
    return useQuery({
        queryKey,
        queryFn: async () => {
            const res = await fetch(`${baseURL}${endpoint}`)

            if (!res.ok) {
                throw new Error("Failed to fetch data")
            }

            return res.json()
        }

    })
}