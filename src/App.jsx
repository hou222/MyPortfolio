import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { ScrollToTop } from "./utils/ScrollToTop";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="portfolio" />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

        {/* <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />

          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
        </Route> */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
