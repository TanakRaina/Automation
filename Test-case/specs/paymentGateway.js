describe('Configure Organization Payment Details' , function(){
           var path = require('path');
                    browser.driver.manage().deleteAllCookies();                         
                    browser.driver.manage().window().maximize();
                    browser.get('http://givingapp-qa.stage-roundglass.com/login');
                 /* element(by.id('emailInput')).sendKeys('rgfundraiser_backoffice@round.glass');
                    element(by.id('passwordInput')).sendKeys('db8@nBOu'); */
                  element(by.id('emailInput')).sendKeys('raina.tanak@gmail.com');
                  element(by.id('passwordInput')).sendKeys('123456789');  
                  
                    element(by.buttonText('Login')).click().then(function(){
                    browser.sleep( 2000 );

                    return browser.driver.getCurrentUrl().then(function(url){
                    return (/profile/).test(url);
                    });

                  });
                  
                afterEach(function(){
                browser.sleep(3000);
              });//afterEach block
              
           it('should find the organization and open PaymentConfig tab' , function(){
               element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.dropdown.profile > a')).click();
               element(by.cssContainingText('a', 'My Organizations')).click();
               browser.sleep(2000);
               //below line of code has to be changed according to the organization to be selected.
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > div > organization-list-widget > div.row > div:nth-child(20) > div > div > div.media-body.media-middle > p > a')).click();
               browser.sleep(2000);
               element(by.cssContainingText('a','PAYMENT CONFIGURATION')).click();
               browser.sleep(2000);
               
           });
                
           it('should configure Organization with Stripe Payment Gateway',function(){
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > payment-configuration > div > div.container.form > div > div > div > payment-gateway-selection > div > div > div.row > div > select')).click();
               element(by.cssContainingText('option', 'Stripe')).click();
               browser.sleep(2000);
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > payment-configuration > div > div.container.form > div > div > div > payment-gateway-selection > div > div > div.row.form.padding-top20 > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div > input')).sendKeys(browser.params.StripeTestSecretKey);
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > payment-configuration > div > div.container.form > div > div > div > payment-gateway-selection > div > div > div.row.form.padding-top20 > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > div > input')).sendKeys(browser.params.StripeTestPublishableKey);
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > payment-configuration > div > div.container.form > div > div > div > payment-gateway-selection > div > div > div.row.form.padding-top20 > form > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div > input')).sendKeys(browser.params.StripeLiveSecretKey);
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > payment-configuration > div > div.container.form > div > div > div > payment-gateway-selection > div > div > div.row.form.padding-top20 > form > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div > input')).sendKeys(browser.params.StripeLivePublishableKey);
               browser.sleep(2000);
               
               element(by.css('#fundraising-app-holder > div > user-profile > div > div.container-fluid.customTabContent.campaignDetail > div > div > payment-configuration > div > div.container.form > div > div > div > payment-gateway-selection > div > div > div.row.form.padding-top20 > form > div:nth-child(1) > div > div.radio-inline > label > span')).click();
               browser.sleep(2000);
               element(by.buttonText('Submit'));
               browser.sleep(2000);
           })

           it('should check logout to be successful',function(){
                                  element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.dropdown.profile > a > img')).click().then(function(){
                                  element(by.cssContainingText('a', 'Log Out')).click();
                                  })

                                 

                                  }); // it block-successful logout


});//describe block
