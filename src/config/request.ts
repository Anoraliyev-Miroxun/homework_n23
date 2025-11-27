import axios from 'axios';

const request=axios.create({baseURL:"http://localhost:2025"});


request.interceptors.request.use((config)=>{
    config.headers.Authorization=`Bearer token`
    return config;
})


export {request}