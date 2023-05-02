import { HomePage, MapPage } from "pages";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/map" element={<MapPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
