import MainLayout from "../components/layout/MainLayout";
import { Outlet } from "react-router-dom";
import Professor from "../page/professor/Professor";
import Subject from "../page/subject/Subject";
import Room from "../page/room/Room";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const publicRoute = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/professor", element: <Professor /> },
      { path: "/subject", element: <Subject /> },
      { path: "/room", element: <Room /> },
    ],
  },
];
