import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../shared/components';
import * as actions from '../../redux/actions';

const TooltipWrapper = styled.div`
  height: 15px;
  width: 15px;
  margin-bottom: 130px;
  background-color: white;
  box-shadow: 0 0 2px rgba(0,0,0,.12);
  border-radius: 3px;
`;
//
// height: 200px;
// width: 400px;
// background-color: white;
// box-shadow: 0 0 2px rgba(0,0,0,.12);
// border-radius: 3px;

const Header = styled.div`
  width: 100%;
  padding: 10px 15px;
  font-size: 18px;
  text-align: left;
  border-bottom: 1px solid lightgrey;
`;

const Label = styled.div`
  width: fit-content;
  margin: 10px 15px;
  font-size: 14px;

`;
//
// const Tooltip = (props) => {console.log(props); return (
//   <div className="hint hint--html hint--info hint--top">
//     <div style={{width: 80}} className="hint__content">
//       Сlick me
//     </div>
//   </div>
// )}

const TooltipWrapperA = styled.div`
position: relative;
width: 300px;
height: 200px;
left: -120px;
top: -200px;
border-radius: 3px;
background-color: white;
font-size: 16px;
padding: 4px;
cursor: pointer

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: #FFFFFF transparent transparent transparent;
      top: 204px;
      left: 120px;
    }
}
`;

const Rating = styled.div`
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
  font-size: 10px;
  text-align: left;
  margin: 0 12px;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rating: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  addRestaurant() {
    const restaurant = {
      name: this.state.name,
      rating: Math.floor(Math.random() * 5) + 1
    }
    this.props.addRestaurant(restaurant);
  }

  render() {
    return (
      <TooltipWrapperA>
        <Header>Do you like the restaurant?</Header>
        <Label>Name it:</Label>
        <Input placeholder="Type restaurant name" value={this.state.name} onChange={this.handleChange}></Input>
        <Label>Rate it:</Label>
        <Rating>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
          <i className="material-icons">star</i>
        </Rating>
        <Button onClick={this.addRestaurant}>Add</Button>
      </TooltipWrapperA>
    );
  }
}

export default Tooltip;
