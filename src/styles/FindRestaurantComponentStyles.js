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
