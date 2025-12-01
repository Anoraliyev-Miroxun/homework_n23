import { useMutation } from "@tanstack/react-query";
import type { TeacherField } from "../../types";
import { request } from "@/config/request";
import { useSearchParams } from "react-router-dom";

export const useEditTeacher = () => {
  const [params, _] = useSearchParams();
  return useMutation({
    mutationFn: (data: TeacherField) =>
      request
        .patch(`/teacher/teacher/${params.get("editId")}`, data)
        .then((res) => res.data),
  });
};