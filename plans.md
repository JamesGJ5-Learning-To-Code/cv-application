# From TOP:

Application should include:

- Sections to add each of:

- 1. General information
-- a. Name
-- b. Email
-- c. Phone number

- 2. Educational experience
-- a. School name
-- b. Title of study
-- c. Date of study

- 3. Practical experience
-- Company name
-- Position title
-- Main task of jobs
-- Date from
-- Date until

- Include an edit button AND submit button for each section or the whole CV:

-- Submit button should submit form and display value of input fields in HTML elements

-- Edit button should display the input fields, with previously-displayed information as values
--- Content should be able to be edited and resubmitted in those input fields

Use state and props heavily

# DONE Static version of app:

- App component:
-- DONE Renders a Section component for each of 'General Information', 'Educational Experience' and 'Practical Experience'

- Section component:
-- DONE Renders a div displaying the name of the section (e.g. 'General Information')
-- DONE Renders an EditButton component
-- DONE Renders an InformationForm component
-- DONE Renders a DisplayedInformation component

- EditButton component:
-- DONE Renders a button with 'Edit' as text content

- InformationForm component:
-- DONE Renders a SubmitButton component
-- DONE Renders a FormControlField for each detail (e.g. 'Email' in 'General Information')

- SubmitButton component:
-- DONE Renders a button with 'Submit' as text content

- FormControlField component:
-- DONE Renders a label with detailLabelText as text content
-- DONE Renders an input OR a textarea, based on props.useTextarea and whether it's true or false
-- DONE Label linked via for attribute to input via input's ID, chosen by uniqid

- DisplayedInformation component:
-- DONE Renders a DisplayedDetail component for each detail

- DisplayedDetail component:
-- DONE Renders a span displaying detailHeadingText (may be an empty string if naming the detail is redundant)

# Interactive version of app:

States:

- Within each Section:

-- Whether or not editing is in progress (state called currentlyEditing):
--- Affected by:
---- Clicking EditButton (makes true)
---- Clicking SubmitButton (makes false)
--- Affects:
---- When true:
----- EditButton is NOT rendered
----- InformationForm IS rendered
----- DisplayedInformation is NOT rendered
---- When false:
----- EditButton IS rendered
----- InformationForm is NOT rendered
----- DisplayedInformation IS rendered
--- Closest common ancestor of affected components:
---- SECTION

-- The value of each form control (state called controlValues, which may contain a mapping of each detailName to its corresponding value):
--- Affected by:
---- onChange event of form control (makes new value equal to state)
--- Affects:
---- Value of each form control
---- Text content of second span in each DisplayedDetail component
--- Closest common ancestor of affected components:
---- SECTION

1. Pass initial state for currentlyEditing (true) into the 'General Information' Section from App.js
2. Initialise state for currentlyEditing in Section to be what is in Section's props
3. In Section, if currentlyEditing is true, render InformationForm and DisplayedInformation but do NOT render EditButton; vice versa if currentlyEditing is false

4. In Section, write a method disableEditing which sets currentlyEditing to false and bind it to the Section
5. Pass the disableEditing method down to the InformationForm then to the SubmitButton via props
6. In the SubmitButton, set up an onClick listener for the button and call disableEditing upon the section when said event triggers

7. In Section, write a method enableEditing which sets currentlyEditing to true and bind it to the Section
8. Pass the enableEditing method down to the InformationForm then to the SubmitButton via props
9. In the SubmitButton, set up an onClick listener for the button and call enableEditing upon the Section when said event triggers

10. Repeat Step 1 with the other Sections

11. Pass initial state for controlValues (empty string for each) into the 'General Information' Section from App.js
12. Initialise state for controlValues in Section to be what they are in Section's props

13. Pass controlValues down to the InformationForm then to the FormControlField via props
14. In FormControlField, set value to what it is in state

15. In Section, write a method changeValue which changes the value of a particular detail in state to something new and bind it to the Section
16. Pass the changeValue method down to the InformationForm then to the FormControlField via props
17. In the FormControlField, set up an onChange listener for the control and call changeValue upon the Section when said event triggers

18. Pass controlValues down to the DisplayedInformation then to the DisplayedDetail via props
19. In DisplayedDetail, set the text content of the second span to what it is in state

20. Repeat Step 11 with the other Sections