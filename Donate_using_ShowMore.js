describe('Test Spec' , function(){

                   function clickCampaign(){

                   element(by.cssContainingText('.campaignDes',browser.params.DonationCampaign)).click().then(function(){
                            browser.sleep(5000);

                            element(by.css('.navbar.navbar-default.customMenuBtn div span a.btn.btn-primary')).click().then(function(){
                            console.log("entered donate block")
                            element(by.css('.donateAmountSection div div input')).clear().sendKeys(browser.params.Donation_Amount);
                            browser.findElement(protractor.by.css('select option:nth-child(1)')).click();
                            browser.sleep(2000);
                            element(by.id('firstNameInput')).clear().sendKeys(browser.params.Donor_FirstName);
                            element(by.id('lastNameInput')).clear().sendKeys(browser.params.Donor_LastName);
                            element(by.id('cardNumberInput')).sendKeys(browser.params.Donor_CardNo);
                            element(by.id('securityCodeInput')).sendKeys(browser.params.Donor_SecurityCode);
                            element(by.id('expiryDateInput')).sendKeys(browser.params.Donorr_ExpiryDate);
                            element(by.xpath('//*[@id="modalId"]/div/div/div[2]/div/donate-modal/div/div[7]/div/div/div/div/credit-card-payment/form/div[6]/billing-address-form/form/div[1]/div/input')).isPresent().then(function(present){
                                            if(present ==true){
                                            element(by.xpath('//*[@id="modalId"]/div/div/div[2]/div/donate-modal/div/div[7]/div/div/div/div/credit-card-payment/form/div[6]/billing-address-form/form/div[1]/div/input')).sendKeys(browser.params.Donor_Addr_street);}


                                            else{
                                            browser.sleep(100)}    });

                            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select')).element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select > option:nth-child(104)')).click();
                            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select')).element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select > option:nth-child(21)')).click();
                            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).sendKeys(browser.params.Donor_Addr_City);
                            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).sendKeys(browser.params.Donor_Addr_pincode);
                            browser.sleep(1000);
                            element(by.css('div.action button')).click();
                            browser.sleep(3000);
                            });
                            });

                   };


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

                            browser.executeScript('window.scrollTo(0,200);').then(function() {
                                                              browser.sleep(3000);

                                                          })


                            function findCampaign(){
                              console.log('inside findCampaign function');
                              element.all(by.tagName('fundraiser-card-list')).count().then(function(count) {
                                console.log(count);
                              });
                              browser.sleep(2000);
                              element(by.cssContainingText('.campaignDes',browser.params.Donation_Campaign)).isPresent().then(function(present){
                                    console.log(present);

                                    if(present == true){
                                    console.log('inside if block');

                                    clickCampaign()
                                    return

                                    }//if element is present



                                    else{

                                    console.log('inside else block');
                                    element(by.css('#fundraising-app-holder > div > filter-widget > div > div.container-fluid.customTabContent > div > div:nth-child(2) > div > button')).click();
                                    console.log('calling findCampaign function');
                                    findCampaign();
                                    };

                                    });
                                    };
                            browser.pause();
                            findCampaign();



});

});//describe block