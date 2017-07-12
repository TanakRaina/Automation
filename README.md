How to run Jasmine Testcases using Protractor


Installation
    1. Webdriver-manager
    2. Protractor
 
 
Starting up server
    1. webdriver-manager update
    2. webdriver-manager start
     
     
Running the test
    1. cd into the project folder
    2. protractor conf.js
    
    
    
Javascript Files

1. conf.js
        It tells Protractor where test files(specs) are and where to find Selenium Server(Selenium Address).
    
2. login.js
        It contains complete Jasmine Test blocks which test behavior of login page under multiple inputs.
    
3. login_details.json
        It contains values to keys used as variables in Test Spec file.
    

