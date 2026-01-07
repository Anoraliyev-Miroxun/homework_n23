import { BrowserRouter } from "react-router-dom";
import type { ChildrenType } from "../@types";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const ProviderConf = ({ children }: ChildrenType) => {
  const queryClinet = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default ProviderConf;

{
  /* <></> */
}
{
  /* <Fragment></Fragment> */
}
