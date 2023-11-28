import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Router>{children}</Router>
    </>
  );
};
