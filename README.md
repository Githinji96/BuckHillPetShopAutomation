# BuckHillPetShopAutomation
This repository contains the source code for an ecommerce website built using Cypress for end-to-end testing.
The website allows users to browse products, add them to their cart, and complete the checkout process. 
Additionally, it includes an administration level for managing products, inventory, and orders.

Table of Contents
Installation
Running the Tests
Folder Structure
Configuration
Tests
Contributing
License

      Installation
To install and run this ecommerce website locally, follow these steps:
Clone this repository to your local machine.
Install the necessary dependencies by running the following command: npm install

Running the Tests
To run the tests using Cypress, execute the following command: npm run cypress:run:chrome

Folder Structure
The folder structure of this repository is as follows:
cypress: Contains the Cypress tests.
cypress/integration: Holds the test files.
cypress/support: Contains support files for test configuration.
cypress/fixtures: Holds fixture files with sample data for tests.
cypress/plugins: Contains plugins used for test configuration.
Configuration
The configuration file for Cypress is located at cypress.config.js.This file includes configurations needed in executing tests such as timeout and retries.
Tests
The test cases includes to levels
a) The administration area
b) The frontend user area 

  The administration area
  The admin covers the following test scenarios
  1.Test customer page
  The test cases scripts includes:
  - Add new customers test
  - Display all email addresses of a customer in the table test
  - Display the email of a customer in the 3rd row test.
  
  2.Test Products page
  The test cases scripts includes:
  -Display the product brand of the 4th row test.
  -Edit product information in the table
  -Delete a product in the table
  -Test all data in the table
  -Print all product names

  The frontend user area
  The test scenario is user interface test
  The test cases scripts:
  -Display items on home page test
  -Filter products based on brands
  -Filter products based on category
  -Search products
  -Add a single product in a cart randomly and checkout

  Contributing
If you would like to contribute to this project, please follow these steps:
Fork this repository and clone it to your local machine.
Create a new branch for your changes:git checkout -b my-new-feature
 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.








 
