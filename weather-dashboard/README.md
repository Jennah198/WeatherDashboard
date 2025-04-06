# Weather Dashboard

The Weather Dashboard is a web application that provides users with real-time weather information and 5-day forecasts for any city. It's designed to be user-friendly and accessible across various devices.

## Features

-   **Real-time Weather Data:** Displays current temperature, wind speed, humidity, and weather conditions.
-   **5-Day Forecast:** Provides a 5-day forecast, including temperature and humidity.
-   **Search History:** Stores recently searched cities for quick access.
-   **Clear History:** Allows users to clear their search history.
-   **Error Handling:** Displays clear error messages for invalid city names or network issues.
-   **Loading Indicators:** Shows loading indicators during data retrieval.
-   **Responsive Design:** Ensures a seamless experience on various devices (desktops, tablets, and smartphones).

## Technologies Used

-   React.js
-   Tailwind CSS
-   OpenWeatherMap API
-   React Spinners (for loading indicators)
-   Custom React Hooks (for search history)

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Jennah198/WeatherDashboard.git]
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd weather-dashboard
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).**

## API Usage

This application uses the OpenWeatherMap API to fetch weather data. You will need an API key to run the application.

1.  **Sign up for an API key at [OpenWeatherMap website](https://openweathermap.org/).**
2.  **Create a `.env.local` file in the root directory of the project.**
3.  **Add your API key to the `.env.local` file:**

    ```
    VITE_API_KEY=2153d72dfaafa1fce3a485102a930fb4
    ```

## Usage

1.  Enter a city name in the search bar.
2.  Click the search button or press Enter.
3.  View the current weather and 5-day forecast.
4.  Use the search history to quickly revisit previously searched cities.
5.  Click "Clear History" to remove the search history.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.


## Contact

[Nezira] - [neziraworku198@gmail.com] - [Jennah198]