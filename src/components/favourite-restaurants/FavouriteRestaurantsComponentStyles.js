import styled from 'styled-components';

export const RestaurantsWrapper = styled.div`
  height: calc(100% - 85px);
  width: 20%;
  margin-left: 1%;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 40px;
  text-align: center;
  float: left;

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

export const MapWrapper = styled.div`
  height: 100%;
  width: 78%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  font-size: 40px;
  text-align: center;
  float: right;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  > div {
    height: 100%;
    width: 100%;
  }
`;
