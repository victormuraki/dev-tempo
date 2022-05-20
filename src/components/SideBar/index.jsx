import { Container } from "./style"

export function SideBar() {
    return (
        <Container>
            <>
                <input type="text" />
                <button>Buscar</button>
            </>
            <>
                <p>São Paulo</p>
                <p>Rio de Janeiro</p>
                <p>Santa Catarina</p>
                <p>Bahia</p>
            </>
            <>
                <h4>Detalhes sobre a previsão</h4>
                <p>Umidade</p>
                <p>Vento</p>
                <p>Raio UV</p>
            </>
            <>
                <h4>Próximos dias</h4>
                <p>Segunda</p>
                <p>Terça</p>
            </>
        </Container>
    )
}