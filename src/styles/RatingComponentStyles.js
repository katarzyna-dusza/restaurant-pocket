import styled from 'styled-components';

export const RatingComponentReadOnlyWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  font-family: 'Ubuntu', sans-serif;
  font-size: 10px;
  text-align: right;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  i {
    color: #f4e21a;
  }
`;

export const RatingComponentWrapper = styled.div`
  width: 100%;
  margin: 0 12px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 10px;
  text-align: left;

  i {
    color: #f4e21a;
    font-size: 30px;
  }
`;
