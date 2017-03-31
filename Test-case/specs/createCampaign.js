describe('Campaign Create Spec' , function(){
           var path = require('path');

           beforeEach(function() {
                   originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
               });

           afterEach(function() {
                 jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
               });


           it('should create a campaign' , function(){
           browser.driver.manage().window().maximize();
           browser.driver.manage().deleteAllCookies();
           browser.ignoreSynchronization = true;
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
                   element(by.css('#navbar  ul  li:nth-child(3)  a')).click();
                   browser.sleep(2000);
                   element(by.css('#tabbar div div ul li:nth-child(1) a span')).getText().then(function (text) { console.log(text) });

                   element(by.id('campaignNameInput')).sendKeys(browser.params.CampaignName);
                   element(by.id('campaignSummaryInput')).sendKeys(browser.params.CampaignSummary);
                   element(by.tagName('select')).$('[value="Elderly"]').click();
                   element(by.xpath('//*[@id="fundraising-app-holder"]/div/create-campaign/div/div[2]/div/div/campaign-overview/div[2]/div/form/div/div/div[5]/div/div[1]/auto-complete-widget/div/input')).sendKeys(browser.params.CampaignLocation);
                   element(by.css('.action .btn:nth-child(1)')).click();
                   browser.sleep(3000);

                   element(by.css('#tabbar div div ul li:nth-child(3) a')).click().then(function(){
                                      console.log('inside story tab');
                                      browser.sleep(3000);
                                      element(by.class('.storyPanels .panel .container .addPanel .addNewFile .btn')).click().then(function(){
                                      console.log('clicked story dropdown icon')
                                      browser.sleep(3000);
                                      element(by.id('#storyTitleInput')).sendKeys(browser.params.storyTitle);
                                      element(by.id('#storyDescriptionInput')).sendKeys(browser.params.storyDescription);
                                      element(by.css('.checkbox .btn-group .btn')).click();
                                      browser.sleep(3000);
                                      element(by.css('.row .action .btn')).click();
                                      });
                                      });
           });//it block
});//describe block


/*
                   element(by.css('#tabbar div div ul li:nth-child(2) a')).click().then(function(){
                   console.log('inside campaign details');
                   browser.sleep(3000);
                   element(by.id('#simple-dropdown')).click().then(function(){
                   console.log('clicked dropdown icon')
                   browser.sleep(3000);
                   element(by.css('#campaignDetail  div:nth-child(2)  div  div  div  div.filterList.dropdown-menu  ul  li:nth-child(1)  a')).getText().then(function (text) { console.log(text) });
                   });
                   }); */