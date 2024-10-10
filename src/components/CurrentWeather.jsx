import styled from 'styled-components';

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0 auto;
`;

const Temp = styled.h1`
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.text};
`;

const Location = styled.h2`
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.text};
`;

const CurrentWeather = ({ location, temperature }) => {
  return (
    <Container>
      <Location>{location}</Location>
      <Temp>{temperature}</Temp>
    </Container>
  );
};

export default CurrentWeather;
