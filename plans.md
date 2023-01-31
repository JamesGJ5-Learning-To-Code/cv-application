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

# My workflow:

Plan of static version of app:

- App component:
-- Renders a Section component for each of 'General Information', 'Educational Experience' and 'Practical Experience'

- Section component:
-- Renders a div displaying the name of the section (e.g. 'General Information')
-- Renders an EditButton component
-- Renders an InformationForm component
-- Renders a DisplayedInformation component

- EditButton component:
-- Renders a button with 'Edit' as text content

- InformationForm component:
-- Renders a SubmitButton component
-- Renders an InputField for each detail (e.g. 'Email' in 'General Information')

- SubmitButton component:
-- Renders a button with 'Submit' as text content

- InputField component:
-- Renders a label with detailLabelText as text content
-- Renders an input of type detailInputType
-- Label linked via for attribute to input via input's ID, chosen by uniqid

- DisplayedInformation component:
-- Renders a DisplayedDetail component for each detail

- DisplayedDetail component:
-- Renders a div displaying detailHeadingText (may be an empty string if naming the detail is redundant)

1. Code up static version of the app
2. Plan out interactive version of app
3. Code up interactive version of app