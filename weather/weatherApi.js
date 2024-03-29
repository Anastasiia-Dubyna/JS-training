export const getWeatherByQuery = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95632b02f9162f375a368971925f5209&units=metric`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  });
};
