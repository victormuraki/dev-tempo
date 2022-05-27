import { useContext } from "react";
import { Container, Content, IconAndPrev, LocalAndDate } from "./style";

import { Context } from "../Context/Context";

export function WeatherCard() {

    const { city, temperature, typeWeather, iconWeather } = useContext(Context);

    const date = new Date();
    const options = { weekday: 'short', year: '2-digit', month: 'long', day: 'numeric' }
    const dataFormatada = date.toLocaleDateString('pt-BR', options);

    function weatherNameType() {
        if (typeWeather === 'Clear') return 'Céu limpo';
        if (typeWeather === 'Thunderstorm') return 'Tempestade';
        if (typeWeather === 'Drizzle') return 'Neblina';
        if (typeWeather === 'Rain') return 'Chuva';
        if (typeWeather === 'Snow') return 'Nevando';
        if (typeWeather === 'Atmosphere') return 'Neblina';
        if (typeWeather === 'Clouds') return 'Nublado   ';
    }

    return (
        <Container>
            <Content>
                <span>{temperature}°</span>
                <LocalAndDate>
                    <h2>{city}</h2>
                    <p>{dataFormatada}</p>
                </LocalAndDate>
                <IconAndPrev>
                    <img src={`http://openweathermap.org/img/wn/${iconWeather}.png`} alt="" />
                    <p>{weatherNameType()}</p>
                </IconAndPrev>
            </Content>
        </Container>
    )
}