import { useContext, useEffect, useState } from "react"
import { Container, Input, CityCard, ForecastDetail, ForeCastNextDays } from "./style"

import { Context } from "../Context/Context";

export function SideBar() {

    const { humidity, wind, setCity } = useContext(Context)
    const [search, setSearch] = useState('');

    function handleSaoPaulo() {
        setCity('São Paulo');
    }

    function handleRioDeJaneiro() {
        setCity('Rio de Janeiro');
    }

    function handleSantaCatarina() {
        setCity('Santa Catarina');
    }

    function handleBahia() {
        setCity('Bahia');
    }

    function handleSearch() {
        setCity(search);
    }


    return (
        <Container>
            <Input>
                <input type="text" placeholder="Procure outra cidade" onChange={event => setSearch(event.target.value)} />
                <button onClick={handleSearch}>Buscar</button>
            </Input>
            <CityCard
                onClick={handleSaoPaulo}
            >
                <p>São Paulo</p>
            </CityCard>
            <CityCard
                onClick={handleRioDeJaneiro}
            >
                <p>Rio de Janeiro</p>
            </CityCard>
            <CityCard
                onClick={handleSantaCatarina}
            >
                <p>Santa Catarina</p>
            </CityCard>
            <CityCard
                onClick={handleBahia}
            >
                <p>Bahia</p>
            </CityCard>
            <ForecastDetail>
                <h3>Detalhes sobre a previsão</h3>
                <p>Umidade: {humidity}</p>
                <p>Vento: {(wind * 4.32).toFixed(1)} km/h</p>
            </ForecastDetail>
        </Container>
    )
}