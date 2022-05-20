import { useEffect, useState } from "react"
import { Container, IconAndPrev, LocalAndDate } from "./style"
import { api } from "../services/api"

export function WeatherCard() {

    useEffect(() => {
        api.get(`&city_name=carapicuiba`)
        .then(response => {
            console.log(response)
        })
    }, [])

    // const [city, setCity] = useState([])
    // const [temperature, setTemperature] = useState([])

    return (
        <Container>
            <h1>16°</h1>
            <LocalAndDate>
                <h2></h2>
                <p>06:09 - Segunda, 20 Mai 22</p>
            </LocalAndDate>
            <IconAndPrev>
                <img src="" alt="" />
                <p>Nublado</p>
            </IconAndPrev>
        </Container>
    )
}