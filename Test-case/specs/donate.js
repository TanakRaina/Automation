  describe('Test Spec' , function(){
  
                     it('should check donation to be successful' , function(){
                     browser.driver.manage().window().maximize();
                     browser.driver.manage().deleteAllCookies();
                   //  browser.get('http://givingapp-qa.stage-roundglass.com/login');
                    /*    element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                        element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
                        element(by.buttonText('Login')).click().then(function(){
                            browser.sleep( 2000 );
                            browser.driver.wait(function(){
                           return browser.driver.getCurrentUrl().then(function(url){
                            return (/profile/).test(url);
                            });
                            
                            });
                        }); */
                    /*    browser.sleep(2000);
                            element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.customSearch > auto-complete-widget > div > input')).click();
                            browser.sleep(2000);
  
                            element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > input')).sendKeys('Health and Wellbeing');
                            browser.sleep(3000);
  
                            element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > div > div > li > div > div:nth-child(2) > li:nth-child(1) > a')).click() */
                             browser.get('http://givingapp-qa.stage-roundglass.com/campaign/adding-campaign-to-test-emails1').then(function(){
                                                       browser.sleep(15000);
                            element(by.id('#donate-gtm')).click();
                            console.log("entered donate block")
                            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.donateAmountSection > div > div > input')).clear().sendKeys(browser.params.DonationAmount);
                            browser.findElement(protractor.by.css('select option:nth-child(1)')).click();
                            browser.sleep(2000);
                            element(by.id('firstNameInput')).clear().sendKeys(browser.params.DonorFirstName);
                            element(by.id('lastNameInput')).clear().sendKeys(browser.params.DonorLastName);
  
                            element(by.id('cardNumberInput')).sendKeys(browser.params.DonateCardNo);
                            element(by.id('securityCodeInput')).sendKeys(browser.params.DonateSecurityCode);
                            element(by.id('expiryDateInput')).sendKeys(browser.params.DonateExpiryDate);
                            browser.sleep(1000);
                            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div.action > button')).click();
                            browser.sleep(3000);

                             });
 
                            });
  
              
             
  

  });//describe block