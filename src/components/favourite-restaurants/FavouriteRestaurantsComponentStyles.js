import styled from 'styled-components';

export const RestaurantsWrapper = styled.div`
  height: calc(100% - 85px);
  width: 20%;
  margin-left: 1%;
  overflow: scroll;
  font-size: 40px;
  text-align: center;
  float: left;
`;

export const MapWrapper = styled.div`
  height: 100%;
  width: 78%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  font-size: 40px;
  text-align: center;
  float: right;

  > div {
    height: 100%;
    width: 100%;
  }
`;
