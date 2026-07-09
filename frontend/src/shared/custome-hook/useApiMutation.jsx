import { baseURL } from "../../axios/axios";
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {toast} from  "react-toastify"
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
                
                const data = await res.json()

                if(!res.ok){
                    throw new Error(data?.message || "Request failed")
                }

                return data
        },

        onSuccess: (data) => {
            quereyClient.invalidateQueries({
                queryKey: invalidateKey,
            })
            toast.success(error.message)
        },

        onError: (error) => {
            toast.error(error.message)
        }
    })

}