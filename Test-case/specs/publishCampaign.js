describe('Publish a campaign' , function(){
           var path = require('path');
                    browser.driver.manage().deleteAllCookies();
                    browser.driver.manage().window().maximize();                
                    browser.get('http://givingapp-qa.stage-roundglass.com/login');
                  element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                    element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
               /*   element(by.id('emailInput')).sendKeys('tanakraina@gmail.com');
                  element(by.id('passwordInput')).sendKeys('654321');  
                  */
                    element(by.buttonText('Login')).click().then(function(){
                    browser.sleep( 2000 );

                    return browser.driver.getCurrentUrl().then(function(url){
                    return (/profile/).test(url);
                    });

                  });
                  

           it('should find the organization and open campaign History tab' , function(){
               browser.waitForAngular();
               browser.sleep(2000);
               element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.dropdown.profile')).click();
               element(by.cssContainingText('a', 'My Organizations')).click();
               browser.sleep(2000);
               //below line of code has to be changed according to the organization to be selected.
               element(by.css('div.col-md-12:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1)')).click();
               browser.sleep(2000);
               element(by.cssContainingText('a','CAMPAIGN HISTORY')).click();
               browser.sleep(2000);
               
           });
                
           it('should publish any draft campaign',function(){
               element(by.cssContainingText('button','SUBMITTED')).click();
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > div > campaign-list-view > div > div.container-fluid.customTabContent > div > div:nth-child(2) > div > div > div:nth-child(1) > fundraiser-card-list > div > div.campaignWiget.partnerListView > div > div:nth-child(5) > div > button:nth-child(2)')).click();
               browser.waitForAngular();
               browser.sleep(4000);
               element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > create-campaign-banner > div > div > div > a:nth-child(2)')).click();
 
           });

           it('should check logout to be successful',function(){
                                  element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.dropdown.profile')).click().then(function(){
                                  element(by.cssContainingText('a', 'Log Out')).click();
                                  })

                                 

                                  }); // it block-successful logout


});//describe block
