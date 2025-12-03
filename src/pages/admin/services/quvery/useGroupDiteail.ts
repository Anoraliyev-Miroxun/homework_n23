import {useQuery} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { request } from "@/config/request.ts";
import type { GroupDetail } from "../../type";

export const useGroupDetail=(id:string)=>{
    return useQuery({
        queryKey:["groups",id],  
        queryFn:()=> request.get<GroupDetail>(`/group/for-admin/${id}`).then((res)=>res.data),
        }
    )
}