import axios from 'axios';

async function getWeather(city: string) {
  try {
    const apiKey = '431cbf77fe7f77ba9207aaee00b5ac0a'; // לדוגמה מ־openweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${response.data.main.temp}°C`);
    console.log(`Description: ${response.data.weather[0].description}`);
  } catch (error: any) {
    console.error('Error fetching weather:', error.message);
  }
}

getWeather('Netanya'); // דוגמה לעיר
getWeather('Tel Aviv'); // דוגמה לעיר נוספת
getWeather('Haifa'); // דוגמה לעיר נוספת
getWeather('Jerusalem'); // דוגמה לעיר נוספת
getWeather('Eilat'); // דוגמה לעיר נוספת