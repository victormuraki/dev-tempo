import { useContext } from "react";
import { Container, Content, IconAndPrev, LocalAndDate } from "./style";

import sun from "../../assets/sun-icon.png";
import { Context } from "../Context/Context";

export function WeatherCard() {

    const { city, setCity, temperature, setTemperature, typeWeather, setTypeWeather } = useContext(Context);

    const date = new Date();
    const options = { weekday: 'short', year: '2-digit', month: 'long', day: 'numeric' }
    const dataFormatada = date.toLocaleDateString('pt-BR', options);

    return (
        <Container>
            <Content>
                <span>{temperature}°</span>
                <LocalAndDate>
                    <h2>{city}</h2>
                    <p>{dataFormatada}</p>
                </LocalAndDate>
                <IconAndPrev>
                    <img src={sun} alt="" />
                    <p>{typeWeather}</p>
                </IconAndPrev>
            </Content>
        </Container>
    )
}