// import './App.css';
import "./screenBox/FIgma.css"
import NavFigma from "./screenBox/NavFigma";
import FooterFigma from "./screenBox/FooterFigma";
import PageFigma from "./screenBox/PageFigma";
import BurnADarko from "./screenBox/BurnADarko";
import EggSection from "./screenBox/EggSection";
import RaffleTickets from "./screenBox/RaffleTickets";
import Trading from "./screenBox/Trading";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavFigma />
        <Routes>
          <Route path="/" element={<PageFigma />} />
          <Route path="burnadarko" element={<BurnADarko />} />
          <Route path="Eggauction" element={<EggSection />} />
          <Route path="raffletickets" element={<RaffleTickets />} />
          <Route path="p2ptranding" element={<Trading />} />
        </Routes>
        <FooterFigma />
      </BrowserRouter>
    </>
  )
}

export default App;
