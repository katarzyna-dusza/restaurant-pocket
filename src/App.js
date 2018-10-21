import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import MainNav from './MainNav'
import FindRestaurant from './FindRestaurant'
import styled from 'styled-components'

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: grey;
`;

const MainNavWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #a51a1a;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
`;

const FindRestaurantWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  margin-top: 20px;
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
  background-color: white;
  font-size: 40px;
  text-align: center;

  > div {
    height: 100%;
    width: 100%;
  }
`;



class App extends Component {
  render() {

    return (
      <div>
        <MainNavWrapper>
          <MainNav></MainNav>
        </MainNavWrapper>
        <FindRestaurantWrapper>
          <FindRestaurant></FindRestaurant>
        </FindRestaurantWrapper>


      </div>
    );
  }
}

export default App;
//
// <MapWrapper>
//   <Map></Map>
// </MapWrapper>


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Map from './Map';
// import MainNav from './Main'
// import styled from 'styled-components'
//
// const MapWrapper = styled.div`
//   width: 100%;
//   height: 400px;
//   background-color: grey;
// `;
//
// const MainNavWrapper = styled.div`
//   width: 100%;
//   height: 400px;
//   background-color: grey;
// `;
//
//
//
// class App extends Component {
//   render() {
//
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//
//         <MapWrapper>
//           <Map></Map>
//         </MapWrapper>
//
//       </div>
//     );
//   }
// }
//
// export default App;
