import axios from "axios";

export const startWeatherData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6a37a0becaf6f623b8d73d2b039541f7/12.9716,77.5946?exclude=minutely ,hourly,daily,alerts,flags"
      )
      .then((response) => {
        dispatch(setWeather(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setWeather = (data) => {
  return {
    type: "SET_WEATHER",
    payload: data,
  };
};

export const startfetchWeather = (lat, long) => {
  return (dispatch) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6a37a0becaf6f623b8d73d2b039541f7/${lat},${long}?exclude=minutely ,hourly,daily,alerts,flags`
      )
      .then((response) => {
        dispatch(setWeather(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
