describe('Check sharing for campaigns' , function(){
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

            element(by.css('#searchbar > ul > li > div > div > auto-complete-widget > div > input')).sendKeys(browser.params.Donation_Campaign_stripe).then(function(){
            browser.findElement(protractor.by.css('#searchbar > ul > li > div > div > auto-complete-widget > div > div > div > div > li > div > div:nth-child(2) > li:nth-child(1) > a')).click();
            });
            browser.sleep(5000);

            beforeEach(function(){
                element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-default.socialLink')).click()
            })
            afterEach(function(){
            browser.sleep(2000)
            });

   it('should check share using facebook for campaign' , function(){
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-default.socialLink > div > a:nth-child(2) > i')).click().then(function(){
            browser.getAllWindowHandles().then(function (handles) {

            newWindowHandle = handles[1];
            browser.switchTo().window(newWindowHandle).then(function () {
            expect(browser.driver.getCurrentUrl()).toContain('facebook');
            browser.driver.close();
            browser.switchTo().window(handles[0])});

            }); }); });

   it('should check share using linkedin for campaign' , function(){
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-default.socialLink > div > a:nth-child(3) > i')).click().then(function(){
            browser.getAllWindowHandles().then(function (handles) {

            newWindowHandle = handles[1];
            browser.switchTo().window(newWindowHandle).then(function () {
            expect(browser.driver.getCurrentUrl()).toContain('linkedin');
            browser.driver.close();
            browser.switchTo().window(handles[0])});

            }); }); });

   it('should check share using google for campaign' , function(){
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-default.socialLink > div > a:nth-child(4) > i')).click().then(function(){
            browser.getAllWindowHandles().then(function (handles) {

            newWindowHandle = handles[1];
            browser.switchTo().window(newWindowHandle).then(function () {
            expect(browser.driver.getCurrentUrl()).toContain('google');
            browser.driver.close();
            browser.switchTo().window(handles[0])});

            }); }); });

   it('should check share using twitter for campaign' , function(){
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-default.socialLink > div > a:nth-child(5) > i')).click().then(function(){
            browser.getAllWindowHandles().then(function (handles) {

            newWindowHandle = handles[1];
            browser.switchTo().window(newWindowHandle).then(function () {
            expect(browser.driver.getCurrentUrl()).toContain('twitter');
            browser.driver.close();
            browser.switchTo().window(handles[0])});

            }); }); });

   it('should check share using mail for campaign' , function(){
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-default.socialLink > div > a:nth-child(6) > i')).click().then(function(){
            element(by.id('contact_list')).sendKeys(browser.params.share_with_id);
            element(by.css('#fundraising-app-holder > header > custom-alert > div > div.outer > div > form > div:nth-child(3) > div > textarea')).sendKeys(browser.params.share_with_message);
            element(by.css('#fundraising-app-holder > header > custom-alert > div > div.outer > div > div.alertFooter > button.btn.btn-default.btn-lg')).click();

            });
            });

});//describe block