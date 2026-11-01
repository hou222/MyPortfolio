import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next";
import AppLayout from "./ui/AppLayout";

import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="portfolio" />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
