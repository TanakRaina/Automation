//donation for campaign with stripe and no billing address is successful
//donation for campaign with stripe and billing address is successful
//donation for campaign with units based donation -incomplete
//donation for campaign with donation in payu - incomplete

describe('Check donation using search for campaign' , function(){
    it('should set up start settings',function(){
                browser.driver.manage().window().maximize();
                browser.driver.manage().deleteAllCookies();
                browser.ignoreSynchronization=true;
                browser.get('http://givingapp-qa.stage-roundglass.com');
                browser.sleep(8000);
                /*   browser.driver.findElement(by.id('donate-gtm')).click(); */

    })
            
      
   it('should search a campaign and open donation form',function(){
                //element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.customSearch > auto-complete-widget > div > input')).click();
                element(by.css('#autoComplete')).click();
                browser.sleep(2000);
                element(by.css('#autoComplete')).sendKeys('Chaaaaaaaaaaaariatble').then(function(){
                browser.sleep(2000);
                element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > div > div > li > div > div:nth-child(2) > li:nth-child(1) > a')).click();               
                browser.waitForAngular();
                browser.sleep(3000);
                browser.driver.findElement(by.id('donate-gtm')).click();
                browser.sleep(3000);        

        });

   })//search campaign block
  
   

   it('should enter donation amount and Tip amount' , function(){

                element(by.css('.donateAmountSection .donationAmounte')).click().then(function(){
                element(by.css('.customAmount')).clear().sendKeys(browser.params.Donation_Amount);
                });
                element(by.css('donate-modal div div.donationAmountSec div:nth-child(2) div')).isPresent().then(function(present){
                browser.sleep(2000);
                if(present == true){
                console.log('tip is present');
                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.donationAmountSec > div:nth-child(2) > div > div > span.tipInfo > input')).clear().sendKeys(browser.params.tip_Amount);
                //    browser.findElement(protractor.by.css('select option:nth-child(0)')).click();
                //var tipAmount = element(by.css('.tipInfo .customAmount')).getText();
                // console.log(tipAmount);  
                browser.sleep(3000);
                }});

});//it spec

  it('should check if calculated total amount matches displayed value',function(){
                var donation_value = parseInt(browser.params.Donation_Amount)
                var tip_value = parseInt(browser.params.tip_Amount)
                var total_amount_shown = element(by.css('.totalAmount strong'));
                total_amount_shown.getText().then(function(text){
                    console.log(text);
                    expect(text).toContain(browser.params.total_amount_value);
                })
                browser.sleep(2000);           
                // expect(element(by.css('.totalAmount strong')).getText()).toEqual(( element(by.css('.customAmount')))
                });


it('should add donation details',function(){

                browser.driver.findElement(by.id('firstNameInput')).sendKeys(browser.params.Donor_FirstName);
                //  element(by.id('firstNameInput')).clear().sendKeys(browser.params.Donor_FirstName);
                browser.driver.findElement(by.id('lastNameInput')).sendKeys(browser.params.Donor_LastName);
                browser.driver.findElement(by.id('emailInput')).sendKeys(browser.params.Donor_Email);
                browser.driver.findElement(by.id('cardNumberInput')).sendKeys(browser.params.Donor_CardNo);
                browser.driver.findElement(by.id('securityCodeInput')).sendKeys(browser.params.Donor_SecurityCode);
                browser.driver.findElement(by.id('expiryDateInput')).sendKeys(browser.params.Donor_ExpiryDate);
            /*    element(by.id('securityCodeInput')).isPresent().then(function(present){
                if(present == true){
                element(by.id('securityCodeInput')).sendKeys(browser.params.Donor_SecurityCode);
                }
                else{
                browser.sleep(100)}
                });
                element(by.id('expiryDateInput')).isPresent().then(function(present){
                if(present == true){
                element(by.id('expiryDateInput')).sendKeys(browser.params.Donor_ExpiryDate);
                }
                else{
                browser.sleep(100)}
                }); */
                element(by.id('phoneInput')).isPresent().then(function(present){
                if(present == true){
                element(by.id('phoneInput')).sendKeys(browser.params.Donor_phno);
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
            element(by.buttonText('Donate')).click();
            browser.sleep(4000);
           

});//it block
    it('should check donation entry in campaign',function(){
         browser.sleep(4000);
         element(by.id('button-dismiss')).click().then(function(){
             browser.sleep(2000);
            element(by.css('#tabbar > div > div > ul > li:nth-child(3) > a')).click().then(function(){
            expect(element(by.css('#fundraising-app-holder > div > cause-detail > div > div.container-fluid.customTabContent.campaignDetail.detailCenter > div > div > donors-widget > div > div > div.doneList > div.container > div > div > div:nth-child(1) > div'))).toContain(browser.params.Donor_FirstName);
         })
         
         })
         
 browser.ignoreSynchronization=false;
    })

});//describe block
/*
                var total_amount = (donation_value + ((tip_value)/100)*donation_value);
                console.log(typeof(total_amount));
                var str_value = total_amount.toString();
                console.log()
                expect(element(by.css('.totalAmount strong'))).toContain(str_value);  */
                              //element(by.id('emailInput')).clear().sendKeys('tanakkraina@gmail.com');
                //element(by.id('lastNameInput')).sendKeys(browser.params.Donor_LastName);
                //  browser.driver.findElement(by.id('cardNumberInput')).sendKeys(browser.params.Donor_LastName);
             /*   browser.driver.findElement(by.id('cardNumberInput')).then(function(present){
                if(present == true){
                element(by.id('cardNumberInput')).sendKeys(browser.params.Donor_CardNo);
                }
                else{
                browser.sleep(100)}
            }); */