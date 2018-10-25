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
