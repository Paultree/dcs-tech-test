## dcs-tech-test

Employee information app built with React TypeScript + Java Springboot

# Demo & Snippets

# Requirement/Purpose

We need a web application to create, list, modify and delete employees. The application should consist of a
RESTful API (can be in .net core or any backend framework of your choice) and a React frontend. The schema for
the employee is left to the criteria of the candidate.

# Build Steps

# Design Goals/Approach

- For the backend, went with the generic pattern layers consisting of the Entity, Data Transfer Object (DTO), Controller, Repository and Service.
- For the front-end, a new employee page will consist of a form which will be used to add new employees via submission.
- On the homepage/mainpage, I'm going to have a button that will lead the user to a page that allows them to input information about the employee.
- On the homepage, there will be a remove button which will essentially delete the employee from the database and list.

# Features

- Add employee button on main page that leads user to a form where they can input information about a employee. react-form and simple validations were used to limit user to inputting required and appropriate information.
- Employee list that renders on main page with summary of their information: name, years employed, contract type and email.
- Remove button that deletes employee from database.
- Form hides the end date input if user selects permanent option.
- Added a page that allows user to edit current employee details.

# Known Issues

# Future Goals

- add in a modify feature which allows user to update certain information about existing employees.
- add in test suites for front end and back end.

# Change Logs

# What did you struggle with?

# Licencing Details

# Further Details

first and last name regex pattern
https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name

phone number
https://stackoverflow.com/questions/22378736/regex-for-mobile-number-validation#:~:text=%2F%5E(%5B%2B%5D%5C,%5Cd%7B10%7D%24%2F&text=This%20is%20how%20this%20regex,world%20wide%20matching%20of%20number.

email
https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,%5D%2B)*%24%2F.
