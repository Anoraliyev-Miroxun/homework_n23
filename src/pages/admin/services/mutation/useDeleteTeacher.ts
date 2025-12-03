import { useMutation } from "@tanstack/react-query";
import { request } from "@/config/request";

export const useDeleteTeacher = () => {
  return useMutation({
    mutationFn: (id:string) =>
      request
        .delete(`/teacher/${id}`)
        .then((res) => res.data),
  });
};