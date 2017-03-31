describe('Campaign Delete Spec' , function(){

           it('should delete a draft campaign' , function(){
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
                    element(by.css('#parentNav #desktopMenu ul li:nth-child(1) a')).click();
                    element(by.css('#userMenu li:nth-child(2) a')).click();
                    element(by.cssContainingText('.btn-sortBtn', 'DRAFTS')).click();
                    browser.sleep(2000);
                    element(by.css('#fundraising-app-holder > div > campaign-list-view > div > div.container-fluid.customTabContent > div > div:nth-child(2) > div > div > div:nth-child(1) > fundraiser-card-list > div > div.campaignWiget.partnerListView > div > div.campaignListAction.text-center > button')).click();
                    browser.sleep(2000);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > create-campaign-banner > div > div > div > a:nth-child(2)')).click();
                    browser.sleep(2000);
                    element(by.css('#DeleteMsg > div > div > div.modal-footer.text-center > span:nth-child(1) > button')).click();
                    browser.sleep(2000);


           });
});//describe block

