import React, { Component } from 'react';
import './App.css';

class Employee extends Component {

  person(params){
    var employee = {
      name: "",
      age: 0,
      strength: 0,
      intellengence: 0,
      charisma: 0,
      speed: 0,
      loyalty: 0,
      traits: {},
      effects: [],
    }
    employee.name = "King Randy"
    return employee.name
  }

  render() {
    return (
      <div>
        {this.person()}
      </div>
    );
  }
}

export default Employee;
