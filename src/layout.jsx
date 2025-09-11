

import { Outlet } from "react-router-dom";
import Navbar from "./components/Header";
import ParticlesBg from "./components/ParticlesBg";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
export default function Layout()
{
    return(
        <>
        <ScrollToTop/>
        <ParticlesBg />
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}