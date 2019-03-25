import React, { Component } from 'react';
import './App.css';

class Employee extends Component {

  person(params){
    var employee = {
      name: "",
      height: "" ,
      schedule: [],
      weight: 0 ,
      age: 0,
      strength: 0,
      intellegence: 0,
      charisma: 0,
      speed: 0,
      loyalty: 0,
      traits: {},
      effects: [],
    }
    employee.name = "King Randy"
    return employee
  }

  render() {
    return (
      <div>
        <h3> {this.person().name} </h3>
        <br></br>
        Height: {this.person.height}
        <br></br>
        Weight: {this.person.weight}
      </div>
    );
  }
}

export default Employee;
