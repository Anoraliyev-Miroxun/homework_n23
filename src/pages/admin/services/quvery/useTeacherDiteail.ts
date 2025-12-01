import {useQuery} from "@tanstack/react-query";
import { request } from "../../../../config/request.ts";
import type { IResponse, TeacherList,TeacherDetailT } from "../../types.ts";
import { useParams } from "react-router-dom";

export const useTeacherDetail=(id:string)=>{
 
    return useQuery({
        queryKey:["teacher_list",id],  
        queryFn:()=> request.get<TeacherDetailT>(`/teacher/for-admin/${id}`).then((res)=>res.data),
        
        }
    )
}