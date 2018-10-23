import styled from 'styled-components';

export const Icon = styled.div`
  margin-left: ${props => props.left ? "25px" : "0"};
  margin-right: ${props => props.right ? "25px" : "0"};
  float: ${props => props.right ? "right" : "left"};;
  color: white;

  i {
    font-size: 40px;
    line-height: 70px;
  }
`;

export const AppName = styled.span`
  margin-left: 20px;
  line-height: 70px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  color: white;
`;

export const Button = styled.button`
  height: ${props => props.big ? "65px" : ""};
  width: 15%;
  background-color: #a51a1a;
  color: white;
  outline: none;
  border: none;
  border-radius: 3px;
  line-height: 70px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  float: right;
  cursor: pointer;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${props => props.imageSrc ? `url(${props.imageSrc})` : "white"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.h3`
  margin-top: 0;
  margin-bottom: ${props => props.big ? "10px" : "50px"};
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-size: ${props => props.big ? "50px" : "20px"};
  font-weight: ${props => props.big ? "400" : "300"};
  font-style: ${props => props.big ? "initial" : "italic"};
`;

export const FindInput = styled.input`
  height: 65px;
  width: 80%;
  padding-left: 20px;
  border: none;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  float: left;

  ::placeholder {
    font-family: 'Ubuntu', sans-serif;
  }
`;
