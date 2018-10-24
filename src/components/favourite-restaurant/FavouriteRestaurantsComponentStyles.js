import styled from 'styled-components';

export const FavouriteRestaurantsWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 20%;
  margin-left: 1%;
  font-size: 40px;
  text-align: center;
  float: left;
`;

export const MapWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 78%;
  margin-top: 20px;
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
