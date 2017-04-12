//donation for campaign with stripe and no billing address is successful
describe('Check donation using search for campaign' , function(){
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

   it('should check donation to be successful' , function(){


            element(by.css('#navbar ul li:nth-child(1) a')).click();
            browser.sleep(2000);

            element(by.css('#searchbar > ul > li > div > div > auto-complete-widget > div > input')).sendKeys(browser.params.Donation_Campaign_stripe).then(function(){
            element(by.css('#searchbar > ul > li > div > div > auto-complete-widget > div > div > div > div > li > div > div:nth-child(2) > li > a')).click();
            });
           browser.sleep(5000);
           element(by.xpath('//*[@id="fundraising-app-holder"]/div/cause-detail/div/div[1]/div/div[2]/div[3]/div/span/a[1]')).click()
           console.log("entered donate block");
           // element(by.css('.donationAmounte')).clear().sendKeys(browser.params.Donation_Amount);

            element(by.css('.row tipDetail')).isPresent().then(function(present){
            if(present == true){
            browser.findElement(protractor.by.css('select option:nth-child(2)')).click();
            }
            else{
            browser.sleep(100)}
            });

            browser.sleep(2000);
            element(by.id('firstNameInput')).clear().sendKeys(browser.params.Donor_FirstName);
            element(by.id('lastNameInput')).clear().sendKeys(browser.params.Donor_LastName);
            element(by.id('cardNumberInput')).sendKeys(browser.params.Donor_CardNo);
            element(by.id('securityCodeInput')).sendKeys(browser.params.Donor_SecurityCode);
            element(by.id('expiryDateInput')).sendKeys(browser.params.Donor_ExpiryDate);

            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div:nth-child(4) > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div.form-group > div > input')).isPresent().then(function(present){
                if(present == true){
                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div:nth-child(4) > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div.form-group > div > input')).sendKeys(browser.params.Donor_Addr_street);}
                else{
                browser.sleep(100)}    });

            element(by.className('countrypicker')).isPresent().then(function(present){
                if(present == true){
                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select')).click().then(function(){
                browser.findElement(protractor.by.css('select option:nth-child(104)')).click();
                })

                }
                else{
                browser.sleep(100)}    });

            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select')).isPresent().then(function(present){
                if(present == true){
                browser.findElement(protractor.by.css('select option:nth-child(21)')).click();
                }
                else{
                browser.sleep(100)}    });

            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).isPresent().then(function(present){
                if(present == true){
                element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).sendKeys(browser.params.Donor_Addr_city); }
                else{
                browser.sleep(100)}    });

            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).isPresent().then(function(present){
                if(present == true){
                element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).sendKeys(browser.params.Donor_Addr_pincode); }
                else{
                browser.sleep(100)}    });

            browser.sleep(1000);
            element(by.css('.action .btn')).click();
            browser.sleep(3000);


});//it spec

});//describe block