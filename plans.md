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

-- Whether or not editing is in progress:
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

-- The value of each form control
--- Affected by:
---- onChange event of form control (makes new value equal to state)
--- Affects:
---- Value of each form control
---- Value of second span in each DisplayedDetail component
--- Closest common ancestor of affected components:
---- SECTION

1. Plan out interactive version of app
2. Code up interactive version of app