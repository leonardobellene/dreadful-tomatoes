import { Header } from "ui/layout/Header";
import { Home } from "ui/layout/Home";
import { Shows } from "ui/layout/Shows";
import { Footer } from "ui/layout/Footer";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Shows programType="movies" />} />
                <Route path="/series" element={<Shows  programType="series" />} />
            </Routes>
            <Footer/>
        </div>
    )
}