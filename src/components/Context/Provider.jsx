import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Context } from "./Context"

export const Provider = ({ children }) => {

    const [city, setCity] = useState('Carapicuiba');
    const [temperature, setTemperature] = useState([]);
    const [typeWeather, setTypeWeather] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [wind, setWind] = useState([]);

    useEffect(() => {
        api.get(`weather?q=${city}&appid=cd2b63a1e093ef29156046f660496229&units=metric`)
            .then(response => {
                setCity(response.data.name);
                setTemperature(Math.round(response.data.main.temp));
                setTypeWeather(response.data.weather[0].description);
                setHumidity(response.data.main.humidity);
                setWind(response.data.wind.speed);
            })
    }, [city])



    return (
        <Context.Provider value={{
            temperature, setTemperature, typeWeather, setTypeWeather, city, setCity, humidity, setHumidity, wind, setWind
        }}>
            {children}
        </Context.Provider>
    )
}