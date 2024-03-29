import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BlurDiv, PopOuterDiv } from "./style";
import { PopupContext } from "../../Contexts/PopupContext";

import DownPop from "../DownPop";

export default function GlobalComponents() {

    const { mostrarPopup } = useContext(PopupContext);
    const { pathname } = useLocation();

    mostrarPopup();
    useEffect(() => {
        document.getElementById('BlurDiv')?.setAttribute('style', 'display: none;');
    }, [pathname, mostrarPopup]);

    return (
        <div>
            <BlurDiv id="BlurDiv"/>

            <PopOuterDiv id="popOuter" onClick={() => mostrarPopup()}/>

            { pathname !== '/Tutorial'? <DownPop/> : null }
        </div>
    );
}