import { React, useContext, useState } from 'react';
import {
  Container, Input, CityCard, ForecastDetail, SideBarFooter, SvgIconsFooter,
} from './style';

import { Context } from '../Context/Context';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export default function SideBar() {
  const { humidity, wind, setCity } = useContext(Context);
  const [search, setSearch] = useState('');

  const handleSaoPaulo = () => setCity('São Paulo');

  const handleRioDeJaneiro = () => setCity('Rio de Janeiro');

  const handleSantaCatarina = () => setCity('Santa Catarina');

  const handleBahia = () => setCity('Bahia');

  const handleSearch = () => setCity(search);

  return (
    <Container>
      <Input>
        <input type="text" placeholder="Procure outra cidade" onChange={(event) => setSearch(event.target.value)} />
        <button type="submit" onClick={handleSearch}>Buscar</button>
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
        <p>
          Umidade:
          {' '}
          {humidity}
        </p>
        <p>
          Vento:
          {' '}
          {(wind * 4.32).toFixed(1)}
          km/h
        </p>
      </ForecastDetail>
      <SideBarFooter>
        <p>Developer Victor Muraki</p>
        <SvgIconsFooter>
          <a href="https://github.com/victormuraki/dev-tempo" target="_blank" rel="noreferrer"><img src={github} alt="Link Github Victor Muraki" /></a>
          <a href="https://www.linkedin.com/in/victormuraki/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Link Linkedin Victor Muraki" /></a>
        </SvgIconsFooter>
      </SideBarFooter>
    </Container>
  );
}
