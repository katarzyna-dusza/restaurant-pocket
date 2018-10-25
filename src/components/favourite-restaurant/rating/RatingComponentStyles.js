import styled from 'styled-components';

export const RatingComponentWrapper = styled.div`
  width: 100%;
  position: ${(props) => (props.readOnly ? 'absolute' : 'initial')};
  bottom: ${(props) => (props.bottom ? '5px' : 'initial')};
  right: ${(props) => (props.right ? '5px' : 'initial')};
  top: ${(props) => (props.top ? '5px' : 'initial')};
  left: ${(props) => (props.left ? '5px' : 'initial')};
  margin: ${(props) => (props.readOnly ? 'absolute' : '0 12px')};
  font-family: 'Ubuntu', sans-serif;
  text-align: ${(props) => (props.left ? 'left' : 'right')};

  i {
    color: #f4e21a;
    font-size: ${(props) => (props.readOnly ? '24px' : '30px')};
  }
`;
