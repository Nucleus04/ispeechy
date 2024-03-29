import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../ui/pages/Home";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}



export default Router;