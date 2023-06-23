import { Container, Form, Col } from "react-bootstrap";
import { useState } from "react";

const GetWeather = () => {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState([]);

  const fetchWeather = async (event) => {
    if (event.key === "Enter")
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6db32c9a2e85fa9837f2e474f910dd2`
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
          setCity("");
          console.log(data);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <Container className="m-auto p-auto">
      <Col md={12}>
        <Form.Control
          type="text"
          placeholder="Search for a city"
          value={city}
          onKeyPress={fetchWeather}
          onChange={(event) => setCity(event.target.value)}
        />

        <div>
          {weather.main && (
            <>
              <h1 className="display-1">{weather.name}</h1>
              <p>
                Current Temperature: {(weather.main.temp - 273.15).toFixed(2)}{" "}
                ºC
              </p>
              <p>
                Feels like: {(weather.main.feels_like - 273.15).toFixed(2)} ºC
              </p>
              <p>Humidity: {weather.main.humidity} % </p>
              <p>Maximum Temperature: </p>
              {(weather.main.temp_max - 273.15).toFixed(2)} ºC
              <p>Minimum Temperature: </p>
              {(weather.main.temp_min - 273.15).toFixed(2)} ºC
            </>
          )}
        </div>
      </Col>
    </Container>
  );
};

export default GetWeather;
