const apiKey = '233cebb22c7f1ccac19cf35f4f0288fc';
const city = 'Bwari';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) throw new Error('Weather data not found');
    const data = await response.json();

    const currentDiv = document.getElementById('current-weather');
    currentDiv.innerHTML = `
      <p><strong>Temperature:</strong> ${data.main.temp.toFixed(1)} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById('current-weather').textContent = 'Failed to load weather data.';
    console.error(error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (!response.ok) throw new Error('Forecast data not found');
    const data = await response.json();

    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '<h3>3-Day Forecast:</h3>';

    // Filter list for forecasts at 12:00:00 for the next 3 days
    let count = 0;
    data.list.forEach(item => {
      if (item.dt_txt.includes('12:00:00') && count < 3) {
        const date = new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
        forecastDiv.innerHTML += `
          <p><strong>${date}:</strong> ${item.main.temp.toFixed(1)} °C, ${item.weather[0].description}</p>
        `;
        count++;
      }
    });
  } catch (error) {
    document.getElementById('forecast').textContent = 'Failed to load forecast data.';
    console.error(error);
  }
}

fetchWeather();
fetchForecast();
