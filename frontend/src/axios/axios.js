import axios from "axios"
export const baseURL = "http://localhost:3000"

const instance = axios.create({
    baseURL: `${baseURL}/api/auth`,
})

instance.interceptors.response.use(
    response => response,

    async error => {
        const originalRequest = error.config

        if(error.response?.status == 401 && !originalRequest._retry){
            originalRequest._retry = true

        if(originalRequest?.url  === '/refresh-token'){
            return Promise.reject(error)
        }

            try{
                const response = await instance.post('/refresh-token', {},  { withCredentials: true})
                const {accessToken} = response.data
                localStorage.setItem("access", accessToken)

                instance.defaults.headers.common[`Authorization`] = `Bearer ${accessToken}`
                originalRequest.headers[`Authorization`] = `Bearer ${accessToken}`
                return instance(originalRequest)
            }catch(error){
                console.log(error)
            }
        }
        return Promise.reject(error);
    }
)

export default instance