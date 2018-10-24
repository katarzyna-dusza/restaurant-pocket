import styled from 'styled-components';

export const RestaurantsComponentWrapper = styled.div`
  font-size: 40px;
  text-align: center;
`;

export const PaginationWrapper = styled.div`
  height: 80px;
  width: 20%;
  margin-left: 1%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;

  > ul {
    width: 100%;
    margin: auto;
    padding: 0;
    font-size: 20px;
    position: absolute;
    bottom: 30px;
    list-style: none;
    display: flex;
    justify-content: center;

    > li {
      padding: 0 5px;
      border: 1px solid white;
      background-color: #a52420;

      &.active > a {
        font-weight: bold;
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export const EmptyList = styled.div`
  margin-top: 50px;
  font-size: 16px;
  color: grey;
`;

export const Header = styled.div`
  padding: 0 5px 40px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;

  > i {
    float: right;
    cursor: pointer;
  }
`;
