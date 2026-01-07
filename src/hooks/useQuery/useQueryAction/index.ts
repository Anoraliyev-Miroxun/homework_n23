import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";

export const useLogin = () => {
  const axios = useAxios();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "/login", method: "POST", body: data }),
    onSuccess(data) {},
    onError(error) {},
  });
};
