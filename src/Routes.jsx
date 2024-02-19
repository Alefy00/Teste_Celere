import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopAvalOne = React.lazy(() => import("pages/DesktopAvalOne"));
const DesktopAvalThree = React.lazy(() => import("pages/DesktopAvalThree"));
const DesktopAval = React.lazy(() => import("pages/DesktopAval"));
const DesktopAvalTwo = React.lazy(() => import("pages/DesktopAvalTwo"));
const LPDesktop = React.lazy(() => import("pages/LPDesktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LPDesktop />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopavaltwo" element={<DesktopAvalTwo />} />
          <Route path="/desktopaval" element={<DesktopAval />} />
          <Route path="/desktopavalthree" element={<DesktopAvalThree />} />
          <Route path="/desktopavalone" element={<DesktopAvalOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
