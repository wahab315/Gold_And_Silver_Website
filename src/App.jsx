import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Collection from "./pages/Collection";
import SellPawn from "./pages/SellPawn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ROUTES from "./constants/routes";
import MobileNavigation from "./components/header/MobileNavigation";
import Footer from "./components/header/Footer";
import TermsServices from "./pages/TermsServices";
import PrivicyPolicy from "./pages/PrivicyPolicy";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <MobileNavigation />
        <div className="flex-1">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.COLLECTIONS} element={<Collection />} />
            <Route path={ROUTES.SELL_PAWN} element={<SellPawn />} />
            <Route path={ROUTES.ABOUT_US} element={<About />} />
            <Route path={ROUTES.CONTACT_US} element={<Contact />} />
            <Route path={ROUTES.TERMS_OF_SERVICE} element={<TermsServices />} />
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivicyPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
