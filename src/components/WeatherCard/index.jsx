import { Container, IconAndPrev, LocalAndDate } from "./style"

export function WeatherCard() {
    return (
        <Container>
                <h1>16°</h1>
                <LocalAndDate>
                    <h2>Barueri</h2>
                    <p>06:09 - Segunda, 20 Mai 22</p>
                </LocalAndDate>
                <IconAndPrev>
                    <img src="" alt="" />
                    <p>Nublado</p>
                </IconAndPrev>
        </Container>
    )
}