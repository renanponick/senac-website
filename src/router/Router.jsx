import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../pages/Home";
import About from "../pages/About";

export default function Router() {
    // Graduação, Tecnicos, Certificações, Cursos imersivos, Para sua Empresa
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Home />} />
                <Route path="/recomendation" element={<Home />} />
                <Route path="/notebooks" element={<Home />} />
                <Route path="/language-recomendation" element={<Home />} />
                <Route path="/notebooks" element={<Home />} />
                <Route path="/language-recomendation" element={<About />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
}