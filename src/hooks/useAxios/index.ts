import axios from "axios";
import type { AxiosType } from "../../@types";

export const useAxios = () => {
  const request = ({ url, method = "GET", header, param, body }: AxiosType) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...header,
      },
      params: {
        ...param,
      },
    })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };
  return request;
};
