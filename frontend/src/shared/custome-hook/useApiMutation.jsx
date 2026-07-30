import { baseURL } from "../../axios/axios";
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {toast} from  "react-toastify"
export const useApiMutation = (endpoint, methodType, invalidateKey, getAuthHeader) =>{

    const quereyClient = useQueryClient()

    return  useMutation({
        mutationFn: async ({ body, urlParams = "" }) => {
            console.log(`${baseURL}${endpoint}${urlParams}`)
            const res = await fetch(`${baseURL}${endpoint}${urlParams}`, 
                {method: methodType,
                 headers: {
                    "Content-Type" : "application/json",
                     ...getAuthHeader()
                 },
                 ...(body && {body: JSON.stringify(body)}),
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
                toast.success(data?.message || "Success");
        },

        onError: (error) => {
            toast.error(error.message)
        }
    })

}