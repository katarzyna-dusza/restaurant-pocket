import styled from 'styled-components';

export const RestaurantCardComponentWrapper = styled.div`
  height: 100px;
  margin: 5px 0;
  padding: 5px 10px;
  position: relative;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
`;

export const Name = styled.div`
  padding: 5px 10px;
  display: inline;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  text-align: left;
  float: left;
`;

export const FoodIcon = styled.div`
  width: 30px;
  display: inline;
  color: #a51a1a;
  float: left;
`;
