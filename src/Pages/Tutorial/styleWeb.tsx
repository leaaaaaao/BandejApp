import styled from "styled-components";
import { global } from "../../globalStyle";

export const TutDiv = styled.div `
    display: flex;
    min-height: 100vh;

    .currentPage { background: white; }
    .nextButton { 
        background: ${global.colors.laranja};
        color: white;
    }

    .currentTemplate {
        transform: translate(-50%, -50%);
    }
    .prevTemplate {
        transform: translate(-200%, -50%);
    }
    .nextTemplate {
        transform: translate(200%, -50%);
    }

`;

/*----------------------------------------------------------------------------*/

export const PageDiv = styled.div `
    display: flex;
    flex-direction: column;

    overflow: hidden;

    width: 100vw;

    background-color: ${global.colors.branco};                               //REMOVER DPSSSSSSSSSSSSSSSSSSSSSSSS
`;

export const LogoDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 65.972vh;
    
    align-items: center;
    justify-content: center;                        

    background-color: ${global.colors.laranja};


    @media screen and (max-width: 1140px) {
        height: 75vh;
    }
`;

export const PageContent = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 34.028vh;

    position: absolute;
    bottom: 0;
    left: 0;

    justify-content: center;
    align-items: center;
    
    background-color: ${global.colors.branco};

    @media screen and (max-width: 1140px) {
        height: 25vh;
    }
`;

export const Logo = styled.img `
    width: 25.312vw;
`;

export const StartDiv = styled.div `
    display: flex;
    flex-direction: row;

    gap: 1.875vw;

    .skip {

        background: ${global.colors.branco};
        border: solid 2px ${global.colors.laranja};
        color: ${global.colors.laranja};
    }
`;

export const StartSkip = styled.button `
    width: 24.75vw;
    height: 3.75vw;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 1.25vw;

    color: white;
    background-color: ${global.colors.laranja};

    outline: none;
    border: none;
    border-radius: 12px;

    transition: transform 0.3s ease;
    :active {
        transform: translateY(0.5vh);
    }
`;

/*----------------------------------------------------------------------------*/

export const CurrentDiv = styled.div `
    display: flex;

    padding: 1.718vw 10.9375vw 0;

    justify-content: space-between;
`;

export const CurrentPage = styled.div `
    width: 18.125vw;
    height: 0.625vw;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.24);
`;

/*----------------------------------------------------------------------------*/

export const PageTitle = styled.h1 `
    font-size: 1.700vw;
    font-weight: 700;
    font-family: ${global.fonts.quickSand};

    @media screen and (max-width: 1140px) {
        font-size: 1.875vw;
    }
`;

export const PageDescription = styled.p `
    padding-bottom: 3.75vw;
    width: 35vw;

    font-size: 1.700vw;
    font-weight: 500;
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};

    @media screen and (max-width: 1140px) {
        font-size: 1.875vw;
    }
`;

/*----------------------------------------------------------------------------*/

export const BackDiv = styled.div `
    width: 100vw;
    height: 65.972vh;
    background-color: ${global.colors.laranja};

    @media screen and (max-width: 1140px) {
        height: 75vh;
    }
`;

export const TemplateDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100% - 2.343vw);

    position: relative;                        
`;

export const Template = styled.img `
    width: 58.281vw;

    z-index: 99;
    position: absolute;

    // left: -53vw;
    left: 50%;
    top: 52%;

    filter: drop-shadow(0px 7px 21px 7px rgba(0, 0, 0, 0.25));

    transition: transform 0.3s ease-out;
`;

/*----------------------------------------------------------------------------*/

export const ButtonDiv = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const PrevNext = styled.button `
    width: 24.75vw;
    height: 3.75vw;

    font-size: 1.25vw;
    font-weight: 700;
    font-family: ${global.fonts.quickSand};

    border-radius: 12px;
    border: solid 2px ${global.colors.laranja};

    color: ${global.colors.laranja};

    transition: transform 0.3s ease;
    :active {
        transform: translateY(3px);
    }
`;