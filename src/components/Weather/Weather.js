import React from "react";
import WeatherTitle from "../styledComponents/WeatherTitle";
import NavbarPage from "../NavBar/NavBar";
import { connect } from "react-redux";

function Weather(props) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <NavbarPage />
      <div className="bg">
        {props.weather.currently !== undefined && (
          <div className="container" style={{ marginLeft: 105 }}>
            <div className="row">
              <div className="col-xl-6">
                <WeatherTitle fontSize="20" style={{ color: "white" }}>
                  {month[new Date().getMonth()]} {new Date().getDate()}
                </WeatherTitle>
                <WeatherTitle fontSize="50" style={{ color: "white" }}>
                  {props.match.params.name}
                </WeatherTitle>
              </div>
              <div className="col-xl-6">
                <i
                  className="fas fa-arrow-right fa-3x"
                  style={{ color: "white" }}
                ></i>
              </div>
            </div>
            <div className="weathercontainer">
              <div className="row" style={{ marginLeft: 10 }}>
                <div className="col-xl-4">
                  <br />
                  <br />
                  <WeatherTitle fontSize="50">
                    {props.weather.currently.temperature}°F
                  </WeatherTitle>
                  <br />
                  <WeatherTitle fontSize="15">
                    {props.weather.currently.temperature}°F Feels like{" "}
                    {props.weather.currently.apparentTemperature}°F
                  </WeatherTitle>
                </div>
                <div className="col-xl-2" style={{ marginTop: 70 }}>
                  <WeatherTitle fontSize="15">Rain</WeatherTitle>
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                  <WeatherTitle fontSize="20">
                    {props.weather.currently.dewPoint}%
                  </WeatherTitle>
                </div>
                <div className="col-xl-2" style={{ marginTop: 70 }}>
                  <WeatherTitle fontSize="15">Wind</WeatherTitle>
                  <i className="fas fa-wind"></i>
                  <WeatherTitle fontSize="20">
                    {props.weather.currently.windSpeed} km/hr
                  </WeatherTitle>
                </div>
                <div className="col-xl-2" style={{ marginTop: 70 }}>
                  <WeatherTitle fontSize="15">Humidity</WeatherTitle>
                  <i className="fas fa-hand-holding-water"></i>
                  <WeatherTitle fontSize="20">
                    {(props.weather.currently.humidity * 100).toFixed(2)}%
                  </WeatherTitle>
                </div>
                <div className="col-xl-2" style={{ marginTop: 70 }}>
                  <WeatherTitle fontSize="15">UV Index</WeatherTitle>
                  <i className="fas fa-sun"></i>
                  <WeatherTitle fontSize="20">
                    {props.weather.currently.uvIndex} out of 10
                  </WeatherTitle>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(Weather);
