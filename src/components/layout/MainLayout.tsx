import { ReactNode } from "react";
import Head from "../head/Head";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head />
      {children}
    </>
  );
};

export default MainLayout;
