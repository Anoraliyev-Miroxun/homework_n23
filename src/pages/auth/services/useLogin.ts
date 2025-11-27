import { request } from '@/config/request';
import {useMutation} from '@tanstack/react-query';
import type {LoginT,LotinResponse} from '../types.ts';


export const useLogin=()=>{
    return useMutation({
        mutationFn:(data:LoginT)=>request.post<LotinResponse>("/auth/signin",data).then((res)=>res.data)
    })
}