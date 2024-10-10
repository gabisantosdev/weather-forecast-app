import styled from 'styled-components';

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DateText = styled.p`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TempText = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const DayCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecundary};
  border-radius: 2rem;
  padding: 1rem;
`;

const WeatherForecast = ({ forecast }) => (
  <ForecastContainer>
    {forecast.map(({ day, index }) => (
      <DayCard key={index}>
        <DateText>{day.date}</DateText>
        <TempText>Min: {day.minTemp}</TempText>
        <TempText>Max: {day.maxTemp}</TempText>
      </DayCard>
    ))}
  </ForecastContainer>
);

export default WeatherForecast;
