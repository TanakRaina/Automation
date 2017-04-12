describe('Organization Create Spec' , function(){
            var path = require('path');

            browser.driver.manage().window().maximize();
            browser.driver.manage().deleteAllCookies();
            browser.get('http://givingapp.stage-roundglass.com/login');
            element(by.id('emailInput')).sendKeys(browser.params.validEmail);
            element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
            element(by.css('.loginForm button[type="submit"]')).click().then(function(){
            browser.sleep( 2000 );
            browser.driver.wait(function(){
            return browser.driver.getCurrentUrl().then(function(url){
            return (/profile/).test(url);
            });
            expect(browser.getCurrentUrl()).toMatch('/profile');
            });
            });

           it('should create an organization' , function(){

                   element(by.css('#navbar  ul  li:nth-child(3)  a')).click();
                   browser.sleep(2000);
                   element(by.cssContainingText('.btn','ADD NEW ORGANIZATION')).click().then(function(){

                    element(by.id('orgNameInput')).sendKeys(browser.params.new_org);
                    element(by.id('orgTaxIdInput')).sendKeys(browser.params.org_TaxId);
                    element(by.id('phoneNumberInput')).sendKeys(browser.params.org_phoneNumber);
                    element(by.id('emailInput')).sendKeys(browser.params.org_email);
                    element(by.id('addressInput')).sendKeys(browser.params.org_address);
                    element(by.id('cityInput')).sendKeys(browser.params.org_city);
                    element(by.id('zipInput')).sendKeys(browser.params.org_zip);
                    element(by.id('adminFirstNameInput')).sendKeys(browser.params.org_admin_FirstName);
                    element(by.id('adminLastNameInput')).sendKeys(browser.params.org_admin_LastName);
                    element(by.id('adminEmailInput')).sendKeys(browser.params.org_admin_email);

                   });



                   });




});//describe block

