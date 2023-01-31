import React, { Component } from 'react';
import Section from './components/Section'

// TODO: replace App with CVApplication, and make a separate file for the App, 
// so that it is more clear that the below is reusable (but then may have to 
// put the configurations in App so that the below truly is reusable for other 
// configurations)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Section
          sectionName='General Information'
          currentlyEditing={true}
          details={
            [
              {
                detailControlLabelText: 'Name: ',
                useTextarea: false,
                detailHeadingText: ''
              },
              {
                detailControlLabelText: 'Email: ',
                useTextarea: false,
                detailHeadingText: ''
              },
              {
                detailControlLabelText: 'Phone Number: ',
                useTextarea: false,
                detailHeadingText: ''
              }
            ]
          }
        />
        <Section
          sectionName='Educational Experience'
          details={
            [
              {
                detailControlLabelText: 'School Name: ',
                useTextarea: false,
                detailHeadingText: 'School Name: '
              },
              {
                detailControlLabelText: 'Title of Study: ',
                useTextarea: false,
                detailHeadingText: 'Title of Study: '
              },
              {
                detailControlLabelText: 'Date of Study: ',
                useTextarea: false,
                detailHeadingText: 'Date of Study: '
              }
            ]
          }
        />
        <Section
          sectionName='Practical Experience'
          details={
            [
              {
                detailControlLabelText: 'Company Name: ',
                useTextarea: false,
                detailHeadingText: 'Company Name: '
              },
              {
                detailControlLabelText: 'Position Title: ',
                useTextarea: false,
                detailHeadingText: 'Position Title: '
              },
              {
                detailControlLabelText: 'Main Task: ',
                useTextarea: true,
                detailHeadingText: 'Main Task: '
              },
              {
                detailControlLabelText: 'Date From: ',
                useTextarea: true,
                detailHeadingText: 'Date From: '
              }
            ]
          }
        />
      </div>
    );
  }
}


export default App;
