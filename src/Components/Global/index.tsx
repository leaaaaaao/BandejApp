import { useContext, useEffect } from "react";
import { BlurDiv, PopOuterDiv } from "./style";
import { PopupContext } from "../../Contexts/PopupContext";

import DownPop from "../DownPop";

export default function GlobalComponents() {

    const { mostrarPopup } = useContext(PopupContext);

    mostrarPopup();
    useEffect(() => {
        document.getElementById('BlurDiv')?.setAttribute('style', 'display: none;');
    }, [mostrarPopup]);

    return (
        <div>
            <BlurDiv id="BlurDiv"/>

            <PopOuterDiv id="popOuter" onClick={() => mostrarPopup()}/>

            <DownPop/>
        </div>
    );
}