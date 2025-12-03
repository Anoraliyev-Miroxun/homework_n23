import { useMutation } from "@tanstack/react-query";
import type { TeacherField } from "../../type";
import { request } from "@/config/request";
import { useSearchParams } from "react-router-dom";

export const useEditTeacher = (id:string) => {
  const [params, _] = useSearchParams();
  return useMutation({
    mutationFn: (data: TeacherField) =>
      request
        .patch(`/teacher/teacher/${id}`, data)
        .then((res) => res.data),
  });
};