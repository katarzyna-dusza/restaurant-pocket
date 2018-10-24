import styled from 'styled-components';

export const MainComponentWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  margin-top: 20px;
  text-align: center;

  > div {
    height: ${(props) => (props.home ? '100%' : '')};
    width: ${(props) => (props.home ? '100%' : '')};
  }
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

export const Alert = styled.div`
  height: 65px;
  width: ${(props) => (props.home ? 'calc(80% + 20px);' : '100%')};
  margin: 0;
  position: relative;
  top: ${(props) => (props.home ? '70px' : '-250px')};
  background: rgba(165, 36, 32,0.8);
  border-radius: 3px;
  animation-name: show;
  animation-duration: 1.5s;

  @keyframes show {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  > p {
    width: 100%;
    margin: 0;
    padding: 15px 0;
    position: absolute;
    color: white;
    text-align: center;
    transition: opacity 2s;
  }
`;
