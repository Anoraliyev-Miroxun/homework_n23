import { request } from "@/config/request";
import { useMutation } from "@tanstack/react-query"; 
import type { Numeric } from "node_modules/zod/v4/core/util.d.cts";
import type { $ZodNumberInternals } from "zod/v4/core";


export const useDeleteUser=()=>{
    return(useMutation({
        mutationFn:((id:number)=>{
            return request.delete(`/users/${id}`).then((res)=>res.data)
        })
    })

    )
}