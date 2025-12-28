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
git clone https://github.com/RII77777/web2-assigment

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
      "temperature": 7.19,
"feelsLike": 4.24,
"description": "overcast clouds",
"windSpeed": 4.63,
"County *
"lon": -0.1257,
"lat": 51.5085
}，
"rainLast3h" : 0
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
     "title": "Saudi-led coalition in Yemen warns UAE-backed separatists of immediate action - ABC News" ,
"description": "The Saudi-led coalition in Yemen has warned it will respond immediately to any military movements of separatists backed by the United Arab Emirates that
undermine de-escalation efforts in the south, as the United States urged diplomacy",
"url": "https://abcnews.go.com/International/wireStory/saudi-led-coalition-yemen-warns-uae-backed-separatists-128717707",
"source": "ABC News"
"title": "ADHD drugs may work indirectly to boost attention - NPR",
"description": "Drugs like Adderall and Ritalin appear to help children with ADHD by activating brain areas involved in alertness and motivation.",
"url": "https://www.npr.org/sections/shots-health-news/2025/12/27/nx-s1-5658291/adhd-adderall-ritalin-mechanism",
"source": "NPR"
"title": "Trump to POLITICO: Midterm elections will be about 'pricing' - Politico",
"description": "The president also said, "If you get rid of the filibuster, you're not going to have a shutdown."",
"url": "https://www.politico.com/news/2025/12/27/trump-to-politico-midterm-elections-will-be-about-pricing-00706877",
"source": "Politico"
   },
]
```

