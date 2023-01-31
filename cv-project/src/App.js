import React, { Component } from 'react';
import Section from './components/Section'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section sectionName='General Information'/>
        <Section sectionName='Educational Experience'/>
        <Section sectionName='Practical Experience'/>
      </div>
    );
  }
}


export default App;
