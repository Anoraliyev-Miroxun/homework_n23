import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface QueryType {
  pathname: string;
  url: string;
  param?: object;
}
export const useQueryHandler = ({ pathname, url, param }: QueryType) => {
  const axios = useAxios();

  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, param }).then((res) => res),
  });
};
