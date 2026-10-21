import React from "react";
import {Link, Outlet} from "react-router-dom";

export function Docs() {


    return <><h1>Docs</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="">Docs</Link>
            <Link to="about">About</Link>
            <Link to="docs">Docs</Link>
        </nav>
        <Outlet/>
    </>
}

