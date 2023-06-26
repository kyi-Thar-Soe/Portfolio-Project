import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./Portfolio.css";
import DefaultLayout from "./DefaultLayout";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
export default function Portfolio() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="home" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/> 
                <Route path="portfolio" element={<PortfolioPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}