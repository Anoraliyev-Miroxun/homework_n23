import { useMutation } from "@tanstack/react-query";
import { request } from "@/config/request";

export const useDeleteGroup = () => {
  return useMutation({
    mutationFn: (id:string) =>
      request
        .delete(`/group/${id}`)
        .then((res) => res.data),
  });
};