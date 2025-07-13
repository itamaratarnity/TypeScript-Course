"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function getWeather(city) {
    try {
        const apiKey = 'your_api_key_here'; // לדוגמה מ־openweathermap.org
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios_1.default.get(url);
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${response.data.main.temp}°C`);
        console.log(`Description: ${response.data.weather[0].description}`);
    }
    catch (error) {
        console.error('Error fetching weather:', error.message);
    }
}
getWeather('Tel Aviv');
//# sourceMappingURL=axios-example.js.map