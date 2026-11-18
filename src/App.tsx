import React, {Suspense, useState} from "react";
import {Home} from "./components/Home.tsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {About} from "./components/About.tsx";
import {Docs} from "./components/Docs.tsx";
import {UserContext} from "./UserContext.tsx";
import {Comp} from "./components/Comp.tsx";


export function App() {
    const [user, setUser] = useState('John');

    return <BrowserRouter>
        <UserContext.Provider value={{userName: user, setUserName: (d: string) => setUser(d)}}>

            < nav>
                < Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/docs">Docs</Link>
                <Link to="/context-vs-prop-drilling">Context vs prop Driliing</Link>
            </nav>
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={'LOADING <>'}><Home/></Suspense>}/>
                <Route path="about/" element={<About/>}/>
                <Route path="context-vs-prop-drilling/" element={<Comp username={'Tecnocampus'}/>}/>
                <Route path="docs/" element={<Docs/>}>
                    <Route path="" element={<>Go to home</>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<h1>Doc not found </h1>}/>
                </Route>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
}
