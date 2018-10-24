import styled from 'styled-components';

export const FindRestaurantComponentWrapper = styled.div`
  width: 50%;
  margin-left: 20%;
  padding: 5%;
  position: relative;
  top: 20%;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${(props) =>
    props.imageSrc ? `url(${props.imageSrc})` : 'white'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeHeader = styled.h3`
  margin-top: 0;
  margin-bottom: ${(props) => (props.big ? '10px' : '50px')};
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-size: ${(props) => (props.big ? '50px' : '20px')};
  font-weight: ${(props) => (props.big ? '400' : '300')};
  font-style: ${(props) => (props.big ? 'initial' : 'italic')};
`;
