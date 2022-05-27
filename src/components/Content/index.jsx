import { useContext } from "react";
import { Context } from "../Context/Context";
import { SideBar } from "../SideBar";
import { WeatherCard } from "../WeatherCard";
import { Container, ContentBg } from "./styles";

export function Content() {

    const { typeWeather } = useContext(Context);

    function changeBackgroundImage() {
        if (typeWeather === 'Clear') return 'clear';
        if (typeWeather === 'Rain') return 'rain';
        if (typeWeather === 'Thunderstorm') return 'thunderstorm';
        if (typeWeather === 'Thunderstorm') return 'thunderstorm';
        if (typeWeather === 'Drizzle') return 'drizzle';
        if (typeWeather === 'Clouds') return 'clouds';
        if (typeWeather === 'Mist') return 'mist';
    }

    return (
        <ContentBg>
            <Container className={changeBackgroundImage()}>
                <WeatherCard />
                <SideBar />
            </Container>
        </ContentBg>
    )
}