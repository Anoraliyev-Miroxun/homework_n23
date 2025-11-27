import axios from 'axios';
import Cookie from 'js-cookie';
import type {LotinResponse} from '../pages/auth/types.ts';

const request=axios.create({baseURL:"http://localhost:2025/api/v1"});


request.interceptors.request.use((config)=>{
    const token=Cookie.get("token")
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
});


request.interceptors.response.use(
    (response)=>{
        return response;
    },
    async(error)=>{
        const originalRequest=error.config;
        if(error.response.status==401 && !originalRequest._retry){
            originalRequest._retry=true;
            try {
                const response=await axios.post<LotinResponse>("http://localhost:2025/api/v1/admin/refresh")

                const newToken=response.data.data.token;

                Cookie.set("token",newToken)
                originalRequest.headers.Authorization=`Bearer ${newToken}`
                return request(originalRequest)

            } catch (error) {
                Cookie.remove("token")
                Cookie.remove("role")
                window.location.href="/"
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)


export {request}