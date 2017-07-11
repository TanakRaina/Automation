//donation for campaign with stripe and no billing address is successful
//donation for campaign with stripe and billing address is successful
//donation for campaign with units based donation -incomplete
//donation for campaign with donation in payu - incomplete

describe('Check donation using search for campaign' , function(){
            browser.driver.manage().window().maximize();
            browser.driver.manage().deleteAllCookies();
            browser.get('http://givingapp-qa.stage-roundglass.com/login');
            element(by.id('emailInput')).sendKeys(browser.params.validEmail);
            element(by.id('passwordInput')).sendKeys('123456789');
            //browser.params.validPwd
            element(by.css('.loginForm button[type="submit"]')).click().then(function(){
            browser.sleep( 2000 );
            browser.driver.wait(function(){
            return browser.driver.getCurrentUrl().then(function(url){
            return (/profile/).test(url);
            });
            expect(browser.getCurrentUrl()).toMatch('/profile');
            });
        });
        
   it('should search a campaign and open donation form',function(){
                element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.customSearch > auto-complete-widget > div > input')).click()
                element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > input')).sendKeys('Disaster Management 2').then(function(){
                element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > div > div > li > div > div:nth-child(2) > li')).click();               
                browser.waitForAngular();
                browser.sleep(3000);
                browser.driver.findElement(by.css('#donate-gtm')).click();
              

                browser.sleep(3000);        
            
        });

   }) 

   it('should enter donation amount details' , function(){

                element(by.css('.donateAmountSection .donationAmounte')).click().then(function(){
                    element(by.css('.customAmount')).clear().sendKeys(browser.params.Donation_Amount);
                });


                element(by.css('donate-modal div div.donationAmountSec div:nth-child(2) div')).isPresent().then(function(present){
                if(present == true){
                    console.log('tip is present');
                    browser.findElement(by.css('.tipInfo span')).click().then(function(){
                        console.log('hit tip box');
                    element(by.css('.tipInfo span')).clear().sendKeys(browser.params.tip_Amount);});
            //    browser.findElement(protractor.by.css('select option:nth-child(0)')).click();
        //var tipAmount = element(by.css('.tipInfo .customAmount')).getText();
               // console.log(tipAmount);  
browser.sleep(3000);
                }//if-block
                else{
                console.log('tip is not present');
                browser.sleep(100);}
                }); 


});//it spec

  it('should match total donation amount',function(){
      var donation_value = parseInt(browser.params.Donation_Amount)
      var tip_value = parseInt(browser.params.tip_Amount)
      
      var total_amount = (donation_value + ((tip_value)/100)*donation_value);
                console.log(typeof(total_amount));
                var str_value = total_amount.toString();
                console.log()
                expect(element(by.css('.totalAmount strong'))).toContain(str_value); 
      // expect(element(by.css('.totalAmount strong')).getText()).toEqual(( element(by.css('.customAmount')))
  });


it('should add donation details',function(){

                browser.driver.findElement(by.css('#firstNameInput')).sendKeys(browser.params.Donor_FirstName);
                //  element(by.css('#firstNameInput')).clear().sendKeys(browser.params.Donor_FirstName);
                browser.driver.findElement(by.css('#lastNameInput')).sendKeys(browser.params.Donor_LastName);

                //element(by.css('#emailInput')).clear().sendKeys('tanakkraina@gmail.com');
                //element(by.css('#lastNameInput')).sendKeys(browser.params.Donor_LastName);
                //  browser.driver.findElement(by.css('#cardNumberInput')).sendKeys(browser.params.Donor_LastName);
                browser.driver.findElement(by.css('#cardNumberInput')).then(function(present){
                if(present == true){
                element(by.css('#cardNumberInput')).sendKeys(browser.params.Donor_CardNo);
                }
                else{
                browser.sleep(100)}
                });
                element(by.css('#securityCodeInput')).isPresent().then(function(present){
                if(present == true){
                element(by.css('#securityCodeInput')).sendKeys(browser.params.Donor_SecurityCode);
                }
                else{
                browser.sleep(100)}
                });
                element(by.css('#expiryDateInput')).isPresent().then(function(present){
                if(present == true){
                element(by.css('#expiryDateInput')).sendKeys(browser.params.Donor_ExpiryDate);
                }
                else{
                browser.sleep(100)}
                });
                element(by.css('#phoneInput')).isPresent().then(function(present){
                if(present == true){
                element(by.css('#phoneInput')).sendKeys(browser.params.Donor_phno);
                }
                else{
                browser.sleep(100)}
                });

                element(by.tagName('billing-address-form')).isPresent().then(function(present){

                if(present == true){
                console.log('billing adress form is present')
                element(by.css('billing-address-form form div.form-group div input')).sendKeys(browser.params.Donor_Addr_street);

                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div')).click().then(function(){
                element(by.css('select option:nth-child(5)')).click();

                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div')).click().then(function(){
                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > input')).sendKeys('stateabc');})
                });
                browser.sleep(1000);


                element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).sendKeys(browser.params.Donor_Addr_city);
                element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).sendKeys(browser.params.Donor_Addr_pincode);
                }

                else{browser.sleep(1000);}
});//billing form

          //  element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div.form-group.text-left.donationCheckbox > div > div > label')).click();
            browser.sleep(1000);
           // element(by.css('.action .btn')).click();
            browser.sleep(2000);

});
/*
            it('should check logout to be successful',function(){
            element(by.css('#desktopMenu ul li a')).click();
            element(by.css('#userMenu li.text-center a')).click();
            browser.sleep(2000);

            }); // it block-successful logout
*/
});//describe block