import { useRoutes } from "react-router-dom";
import { publicRoute } from "./public";

export const AppRoutes = () => {
  const element = useRoutes(publicRoute);
  return <>{element}</>;
};
