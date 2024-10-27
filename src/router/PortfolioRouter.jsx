import { Route, Routes } from "react-router";
import { Home, AboutMe, Portfolio, ContactMe, NotFound } from "../components";
import { Navbar } from "../ui/Navbar";
import { PortfolioDetail } from "../components/PortfolioDetail";

export const PortfolioRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="detail/:id" element={<PortfolioDetail />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
