import { baseURL } from "../../axios/axios";
import {useMutation, useQueryClient} from "@tanstack/react-query"

export const useApiMutation = (endpoint, methodType, invalidateKey) =>{

    const quereyClient = useQueryClient()

    return  useMutation({
        mutationFn: async (body) => {
            const res = await fetch(`${baseURL}${endpoint}`, 
                {method: methodType,
                 headers: {
                    "Content-TYpe" : "application/json",
                 },
                 body: JSON.stringify(body),
                })

                if(!res.ok){
                    throw new Error("Request failed")
                }

                return res.json()
        },

        onSuccess: () => {
            quereyClient.invalidateQueries({
                queryKey: invalidateKey,
            })
        }
    })

}