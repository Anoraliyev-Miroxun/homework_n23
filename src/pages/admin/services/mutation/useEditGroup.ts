import { useMutation } from "@tanstack/react-query";
import type { GroupField, TeacherField } from "../../type";
import { request } from "@/config/request";

export const useEditGroup = (id:string) => {
  return useMutation({
    mutationFn: (data: GroupField) =>
      request
        .patch(`/group/details/${id}`, data)
        .then((res) => res.data),
  });
};