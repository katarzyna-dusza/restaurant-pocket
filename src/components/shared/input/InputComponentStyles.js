import styled from 'styled-components';

export const InputComponentWrapper = styled.input`
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

  ::placeholder {
    font-family: 'Ubuntu', sans-serif;
  }
`;
