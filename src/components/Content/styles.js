import styled from 'styled-components';
import clear from '../../assets/ceu-limpo.jpg';
import rain from '../../assets/chuva.jpg';
import thunderstorm from '../../assets/tempestade.jpg';
import drizzle from '../../assets/garoa.jpg';
import clouds from '../../assets/nublado-2.jpg';

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;

    `;

export const ContentBg = styled.div`

    .clear {
        background: rgba(0, 0, 0, 0.3) url(${clear});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;
    }
    .rain {
        background: rgba(0, 0, 0, 0.3) url(${rain});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;

    }
    .thunderstorm {
        background: rgba(0, 0, 0, 0.3) url(${thunderstorm});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;
        
    }
    .drizzle {
        background: rgba(0, 0, 0, 0.3) url(${drizzle});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;
    }
    .clouds {
        background: rgba(0, 0, 0, 0.3) url(${clouds});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;
    }
    .mist {
        background: rgba(0, 0, 0, 0.5) url(${rain});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;
    }
    

`;
