import styled from 'styled-components';

export const ButtonComponentWrapper = styled.button`
  height: ${(props) => (props.big ? '67px' : '40px')};
  width: ${(props) => (props.big ? '15%' : 'fit-content')};
  background-color: ${(props) =>
    props.disabled ? 'rgba(124, 124, 124, .7)' : '#a51a1a'};
  color: white;
  outline: none;
  border: none;
  border-radius: 3px;
  line-height: ${(props) => (props.big ? '70px' : 'none')};
  font-family: 'Ubuntu', sans-serif;
  font-size: ${(props) => (props.big ? '22px' : '16px')};
  float: right;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  bottom: ${(props) => (props.big ? 'none' : '10px')};
  right: ${(props) => (props.big ? 'none' : '10px')};
  position: ${(props) => (props.big ? 'initial' : 'absolute')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
`;
