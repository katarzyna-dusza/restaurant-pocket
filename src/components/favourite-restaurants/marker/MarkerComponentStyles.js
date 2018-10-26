import styled from 'styled-components';

export const MarkerComponentWrapperA = styled.div`
  height: 30px;
  width: 30px;
  padding: 4px;
  position: relative;
  top: -30px;
  background-color: white;
  border: 1px solid #a52420;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  z-index: 0;

  &:after {
    height: 0;
    width: 0;
    position: absolute;
    top: 38px;
    left: 10px;
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: #a52420 transparent transparent transparent;
  }
}
`;
export const MarkerComponentWrapper = styled.div`
  height: 200px;
  width: 300px;
  padding: 4px;
  position: relative;
  left: -120px;
  top: -200px;
  background-color: white;
  border: 1px solid #a52420;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer
  z-index: 1;

  &:after {
    height: 0;
    width: 0;
    position: absolute;
    top: 208px;
    left: 120px;
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: #a52420 transparent transparent transparent;
  }
}
`;

export const Header = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  text-align: left;
  background-color: #a52420;
  color: white;

  i {
    float: right;
  }
`;

export const Label = styled.div`
  width: fit-content;
  margin: 10px 15px;
  font-size: 14px;
`;
