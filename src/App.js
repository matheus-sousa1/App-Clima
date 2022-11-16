import axios from "axios";
import { useState } from "react";
import {
  Container,
  Info,
  Search,
  Top,
  Bottom,
  Section,
} from "./componets/styles/Styles";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8f7335f553878cc526252bc263a9337c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
      setLocation("");
    }
  };
  return (
    <Container className="App">
      <Section>
        <Search>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Pesquisar"
            type="search"
          />
        </Search>

        <Info>
          <Top>
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
          </Top>

          {data.name !== undefined && (
            <Bottom>
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>Sensação</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Umidade</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} M/S</p>
                ) : null}
                <p>Vento</p>
              </div>
            </Bottom>
          )}
        </Info>
      </Section>
    </Container>
  );
}

export default App;
