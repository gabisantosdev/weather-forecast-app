import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider, styled } from 'styled-components';
import Theme from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

const App = () => {
  const ContentContainer = styled.div`
    padding: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  `;

  const CurrentWeatherData = {
    location: 'Salvador',
    temperature: 25,
  };

  const forecastData = [
    { date: '01/10', minTemp: 20, maxTemp: 26 },
    { date: '02/10', minTemp: 20, maxTemp: 26 },
    { date: '03/10', minTemp: 20, maxTemp: 26 },
    { date: '04/10', minTemp: 20, maxTemp: 26 },
    { date: '05/10', minTemp: 20, maxTemp: 26 },
    { date: '06/10', minTemp: 20, maxTemp: 26 },
    { date: '07/10', minTemp: 20, maxTemp: 26 },
    { date: '08/10', minTemp: 20, maxTemp: 26 },
    { date: '09/10', minTemp: 20, maxTemp: 26 },
    { date: '10/10', minTemp: 15, maxTemp: 25 },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ContentContainer>
        <CurrentWeather
          location={CurrentWeatherData.location}
          temperature={CurrentWeatherData.temperature}
        />
        <WeatherForecast forecast={forecastData} />
      </ContentContainer>
    </ThemeProvider>
  );
};

export default App;
