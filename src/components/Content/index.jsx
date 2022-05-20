import { SideBar } from "../SideBar";
import { WeatherCard } from "../WeatherCard";
import { Container } from "./styles";
import imagem from "../../assets/por-do-sol-background.jpg"

export function Content() {
    return (
        <Container>
            <WeatherCard />
            <SideBar/>
        </Container>
    )
}