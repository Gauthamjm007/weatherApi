import styled from "styled-components";
const WeatherTitle = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-style: normal;
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: left;
`;

export default WeatherTitle;
