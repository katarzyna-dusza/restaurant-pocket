import styled from 'styled-components';

export const Icon = styled.div`
  margin-left: ${(props) => (props.left ? '25px' : '0')};
  margin-right: ${(props) => (props.right ? '25px' : '0')};
  float: ${(props) => (props.right ? 'right' : 'left')};
  color: white;
  cursor: ${(props) => (props.link ? 'pointer' : 'auto')};

  i {
    font-size: 40px;
    line-height: 70px;
  }

  a {
    color: white;
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
  height: ${(props) => (props.big ? '65px' : '40px')};
  width: ${(props) => (props.big ? '15%' : 'fit-content')};
  background-color: #a51a1a;
  color: white;
  outline: none;
  border: none;
  border-radius: 3px;
  line-height: ${(props) => (props.big ? '70px' : 'none')};
  font-family: 'Ubuntu', sans-serif;
  font-size: ${(props) => (props.big ? '22px' : '16px')};
  float: right;
  cursor: pointer;
  bottom: ${(props) => (props.big ? 'none' : '10px')};
  right: ${(props) => (props.big ? 'none' : '10px')};
  position: ${(props) => (props.big ? 'initial' : 'absolute')};
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

export const Header = styled.h3`
  margin-top: 0;
  margin-bottom: ${(props) => (props.big ? '10px' : '50px')};
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-size: ${(props) => (props.big ? '50px' : '20px')};
  font-weight: ${(props) => (props.big ? '400' : '300')};
  font-style: ${(props) => (props.big ? 'initial' : 'italic')};
`;

export const Input = styled.input`
  height: ${(props) => (props.big ? '65px' : '30px')};
  width: ${(props) => (props.big ? '80%' : 'calc(90% - 20px)')};
  margin: ${(props) => (props.big ? '0' : '0 15px;')};
  padding-left: 20px;
  border: none;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
  font-family: 'Ubuntu', sans-serif;
  font-size: ${(props) => (props.big ? '20px' : '14px')};
  float: ${(props) => (props.big ? 'left' : 'none')};

  ::placeholder {
    font-family: 'Ubuntu', sans-serif;
  }
`;
