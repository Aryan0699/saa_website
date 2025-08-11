

import { Outlet } from "react-router-dom";
import Navbar from "./components/Header";
import ParticlesBg from "./components/ParticlesBg";
import Footer from "./components/Footer";
export default function Layout()
{
    return(
        <>
        <ParticlesBg />
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}