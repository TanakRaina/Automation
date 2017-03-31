describe('Test Spec' , function(){

           it('should check donation to be successful' , function(){
           browser.driver.manage().window().maximize();
           browser.driver.manage().deleteAllCookies();
           browser.get('http://givingapp-qa.stage-roundglass.com/login');
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
                          element(by.css('#navbar ul li:nth-child(1) a')).click();
                              browser.sleep(2000);

                          element(by.css('#fundraising-app-holder > div > filter-widget > div > div.container-fluid.customTabContent > div > div.row > div:nth-child(1) > fundraiser-card-list > div > div.campaignWiget.overHidden')).click().then(function(){
                          browser.sleep(3000);

                          element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-primary')).click().then(function(){
                          browser.sleep(3000);

                          element(by.id('#cardNumberInput')).sendKeys(browser.params.DonateCardNo);
                          element(by.id('#securityCodeInput')).sendKeys(browser.params.DonateSecurityCode);
                          element(by.id('#expiryDateInput')).sendKeys(browser.params.DonateExpiryDate);
                          browser.sleep(2000);
                          element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div.action > button')).click();

                          });

                          });
           

});
});//describe block