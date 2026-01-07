import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouteProviderConf from "./router";
import ProviderConf from "./provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConf>
      <RouteProviderConf />
    </ProviderConf>
  </StrictMode>
);
