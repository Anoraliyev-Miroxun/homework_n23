import {useQuery} from "@tanstack/react-query";
import type { IResponse, TeacherList,TeacherDetailT } from "../../type.ts";
import { useParams } from "react-router-dom";
import { request } from "@/config/request.ts";

export const useTeacherDetail=(id:string)=>{
    console.log(id,"aaaaaaaaaaaaaaaaaaaaa")
    return useQuery({
        queryKey:["teacher_list",id],  
        queryFn:()=> request.get<TeacherDetailT>(`/teacher/for-admin/${id}`).then((res)=>res.data),
        }
    )
}