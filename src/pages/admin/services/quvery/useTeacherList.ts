import {useQuery} from "@tanstack/react-query";
import { request } from "../../../../config/request.ts";
import type { IResponse, TeacherList } from "../../type.ts";

export const useTeacherList=()=>{
    return useQuery(
        {
        queryKey:["teacher_list"],
        queryFn:()=> request.get<IResponse<TeacherList>>("/teacher").then((res)=>res.data),
        
        }
    )
}