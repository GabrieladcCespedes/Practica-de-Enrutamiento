import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../Home/Home";
import Number from "../Number/Number";
import Word from "../Word/Word";
import ColorWord from "../ColorWord/ColorWord";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:number" element={<Number />} />
            <Route path="/:word" element={<Word />} />
            <Route path="/:word/:color/:bgColor" element={<ColorWord />} />
        </Routes>
    )
}

export default App;