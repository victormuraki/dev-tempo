import { Container, Input, CityCard, ForecastDetail, ForeCastNextDays } from "./style"

export function SideBar() {
    return (
        <Container>
            <Input>
                <input type="text" placeholder="Procure outra cidade"/>
                <button>Buscar</button>
            </Input>
            <CityCard>
                <p>São Paulo</p>
            </CityCard>
            <CityCard>
                <p>Rio de Janeiro</p>
            </CityCard>
            <CityCard>
                <p>Santa Catarina</p>
            </CityCard>
            <CityCard>
                <p>Bahia</p>
            </CityCard>
            <ForecastDetail>
                <h3>Detalhes sobre a previsão</h3>
                <p>Umidade: </p>
                <p>Vento: </p>
                <p>Raio UV: </p>
            </ForecastDetail>
            <ForeCastNextDays>
                <h3>Próximos dias</h3>
                <p>Segunda</p>
                <p>Terça</p>
            </ForeCastNextDays>
        </Container>
    )
}