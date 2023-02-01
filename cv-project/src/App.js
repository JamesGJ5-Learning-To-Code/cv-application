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
                detailReference: 'name',
                detailControlLabelText: 'Name: ',
                useTextarea: false,
                detailValue: 'dasd',
                detailHeadingText: ''
              },
              {
                detailReference: 'email',
                detailControlLabelText: 'Email: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: ''
              },
              {
                detailReference: 'phoneNumber',
                detailControlLabelText: 'Phone Number: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: ''
              }
            ]
          }
        />
        <Section
          sectionName='Educational Experience'
          currentlyEditing={true}
          details={
            [
              {
                detailReference: 'schoolName',
                detailControlLabelText: 'School Name: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: 'School Name: '
              },
              {
                detailReference: 'titleOfStudy',
                detailControlLabelText: 'Title of Study: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: 'Title of Study: '
              },
              {
                detailReference: 'dateOfStudy',
                detailControlLabelText: 'Date of Study: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: 'Date of Study: '
              }
            ]
          }
        />
        <Section
          sectionName='Practical Experience'
          currentlyEditing={true}
          details={
            [
              {
                detailReference: 'companyName',
                detailControlLabelText: 'Company Name: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: 'Company Name: '
              },
              {
                detailReference: 'positionTitle',
                detailControlLabelText: 'Position Title: ',
                useTextarea: false,
                detailValue: '',
                detailHeadingText: 'Position Title: '
              },
              {
                detailReference: 'mainTask',
                detailControlLabelText: 'Main Task: ',
                useTextarea: true,
                detailValue: '',
                detailHeadingText: 'Main Task: '
              },
              {
                detailReference: 'dateFrom',
                detailControlLabelText: 'Date From: ',
                useTextarea: true,
                detailValue: '',
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
