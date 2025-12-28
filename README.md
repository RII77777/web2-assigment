# Weather & News API (Express Backend)

## Project Description

TThis project is a backend REST API developed using Node.js and Express.
It connects to external APIs and demonstrates how to securely retrieve data on the server side and make it available to the frontend.

The application offers:

Weather information for a specified city via the OpenWeather API

Latest news headlines based on a country code using the NewsAPI

All external API requests are processed exclusively on the backend.
API keys are securely stored using environment variables.

Dependency Installation

Clone the repository:
git clone https://github.com/Akehdo/web2-assigments/tree/master/assigment2

Open a terminal in the project directory

Run: npm install

Create a .env file and add your API keys:

OPENWEATHER_API_KEY=your_openweather_key
NEWS_API_KEY=your_newsapi_key
BINGX_API_KEY=your-bingx-api-key
BINGX_SECRET_KEY=your-bingx-secret-key


Start the server with: node server.js

The server will be available at: http://localhost:3001

API Endpoints
Weather API

GET /api/weather — returns current weather data for the specified city.

### GET /api/weather?city=London

![alt text](<res/Снимок экрана 2025-12-28 191158.png>)

### Response:

```
[
  {
    {
	"temperature": 5.04,
	"description": "clear sky",
	"coordinates": {
		"lon": -0.1257,
		"lat": 51.5085
	},
	"feels_like": 0.68,
	"wind_speed": 6.69,
	"country": "GB",
	"rain_last_3h": 0
}
  }
]
```

### News API

- GET /api/news - Returns top news headlines for a given country.

# Example Postman Requests

### Query Parameters:

- country – country code (ISO 3166-1)

### GET /api/news?country=US

![web2-assigments/assigment2/res/Снимок экрана 2025-12-28 191928.png](<res/Снимок экрана 2025-12-28 191928.png>)

### Response:

```
[
   {
     "source": {
	     "id": null,
	     "name": "CNBC"
     },
     "author": "Kai Nicol-Schwarz",
     "title": "Oil giant BP to sell 65% stake in $10 billion Castrol unit - CNBC",
     "description": "The oil giant is looking to divest $20 billion of its assets by the end of 2027.",
     "url": "https://www.cnbc.com/2025/12/24/bp-to-sell-65percent-stake-in-10-billion-castrol-lubricants-to-stonepeak.html",
     "urlToImage": "https://image.cnbcfm.com/api/v1/image/108152371-1748602159864-gettyimages-2199864900-SAFRICA_CASTROL.jpeg?v=1766561657&w=1920&h=1080",
     "publishedAt": "2025-12-24T07:46:54Z",
     "content": "Britain's BP has agreed to sell a 65% shareholding in lubricants business Castrol to Stonepeak for $6 billion, months on from the oil giant seeking a buyer for the unit.\r\nThe deal comes as the compan… [+2293 chars]"
   },
]
```

