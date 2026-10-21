import React from "react";
import {Home} from "./components/Home.tsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {About} from "./components/About.tsx";
import {Docs} from "./components/Docs.tsx";


export function App() {
    return <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/docs">Docs</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about/" element={<About/>}/>
            <Route path="docs/" element={<Docs/>}>
                <Route path="" element={<>Go to home</>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<h1>Doc not found </h1>}/>
            </Route>
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    </BrowserRouter>
}
