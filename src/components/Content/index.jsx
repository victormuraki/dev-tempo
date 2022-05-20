import { SideBar } from "../SideBar";
import { WeatherCard } from "../WeatherCard";
import { Container } from "./styles";

export function Content() {
    return (
        <Container>
            <WeatherCard />
            <SideBar/>
        </Container>
    )
}