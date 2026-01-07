import type { ReactElement } from "react";

export interface AxiosType {
  url: string;
  param?: object;
  header?: object;
  body?: object;
  method?: "GET" | "PATCH" | "POST" | "DELETE";
}

export interface ChildrenType {
  children: ReactElement;
}
