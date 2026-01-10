import { Route, Routes } from "react-router";
import { AgentRoutes } from "./routes/AgentRoutes";

import { Toaster } from "./components/ui/sonner";
import { AdminRoutes } from "./routes/AdminRoutes";
import { AgencyRoutes } from "./routes/AgencyRoutes";

import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
  return (
    <>
      <Routes>
        {MainRoutes}
        {AdminRoutes}
        {AgencyRoutes}
        {AgentRoutes}
      </Routes>
      <Toaster position="top-center" closeButton />
    </>
  );
}
