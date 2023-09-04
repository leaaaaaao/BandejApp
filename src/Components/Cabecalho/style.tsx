import styled from "styled-components";
import { global } from "../../globalStyle";

export const PlaceHolderCabecalho = styled.div `
    display: block;

    width: 100vw;
    height: calc(8vh + 2.25vh);
`;

export const CabecaDiv = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.25vh;

    position: fixed;
    top: 0;
    z-index: 2;

    width: 100vw;
    height: 8vh;

    background: ${global.colors.branco};

    .sideBlur {
        display: flex;
        z-index: 2;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% { backdrop-filter: blur(0px); }
            25% { backdrop-filter: blur(1px); }
            50% { backdrop-filter: blur(2px); }
            100% { backdrop-filter: blur(3px); }
        }
    }

    .dropBlur {
        display: flex;
        z-index: 1;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% { backdrop-filter: blur(0px); }
            25% { backdrop-filter: blur(1px); }
            50% { backdrop-filter: blur(2px); }
            100% { backdrop-filter: blur(3px); }
        }
    }

    .popBlur {
        display: flex;
        z-index: 2;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% { backdrop-filter: blur(0px); }
            25% { backdrop-filter: blur(1px); }
            50% { backdrop-filter: blur(2px); }
            100% { backdrop-filter: blur(3px); }
        }
    }
`;

export const PageTitle = styled.h1 `
    font-size: 16px;
    font-family: ${global.fonts.quickSand};
    font-weight: 700;

    color: ${global.colors.cinza};
`; 

export const DivAjustes = styled.div `
    width: 6.66vw;
    margin-right: 4.4vw;
    padding-left: 2.32vw;
`;

export const IconeAjustes = styled.img `
    width: 6.66vw;
    height: 6.66vw;
`;

export const BlurDiv = styled.div `
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
`;

export const SideButton = styled.img `
    width: 6.66vw;
    margin: 0 0 0 4.44vw;
`;

/*----------------------------------------------------------------------------*/

export const NotifDiv = styled.div `
    display: flex;
    position: relative;
`;

export const NotifIcon = styled.div `
    display: flex;
    width: 5.55vw;
    height: 5.55vw;

    position: absolute;
    top: -50%;
    right: -25%;

    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background: ${global.colors.branco};
`;

export const NotifInside = styled.div `
    display: flex;
    width: 3.33vw;
    height: 3.33vw;

    border-radius: 50%;
    background-color: ${global.colors.laranja};
`;