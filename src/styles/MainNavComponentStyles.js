import styled from 'styled-components';

export const MainNavComponentWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #a51a1a;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
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

export const AppName = styled.span`
  margin-left: 20px;
  line-height: 70px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  color: white;
`;
