describe('Chapter Creation' , function(){

           it('should create a chapter' , function(){
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
                    //search a campaign and add chapter
                    browser.executeScript('window.scrollTo(0,0);');
                    element(by.css('#fundraising-app-holder > div > campaign-list-view > div > div.container-fluid.customTabContent > div > div:nth-child(2) > div > div > div:nth-child(6)')).click().then(function(){
                    console.log("clicked campaign");
                    browser.sleep(2000)
                     element(by.css('#tabbar div div ul li:nth-child(4) a')).getText().then(function (text) { console.log(text) });

                                        element(by.css('#tabbar div div ul li:nth-child(4) a')).click().then(function(){
                                        browser.sleep(3000);
                                       // element(by.xpath('//*[@id="fundraising-app-holder"]/div/create-campaign/div/div[2]/div/div/manage-chapter-widget/div/div/div[2]/div/div/div/div/div/div/a')).click();
                                        element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div > div > div > div > div > div > a')).click().then(function(){
                                        console.log('clicked button');
                                        browser.sleep(3000);
                                        browser.executeScript('window.scrollTo(0,0);');
                                        element(by.css('#chapterTitleInput')).sendKeys(browser.params.chapter_Title);
                                        element(by.id('chapterSummaryInput')).sendKeys(browser.params.chapter_Summary).then(function(){
                                        element(by.css('#chapterTitleInput')).click();
                                     });
                                        browser.sleep(2000);
                                        /*
                                        element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > div.container-fluid.campaignDetail.customTabContent > div > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-8.col-md-offset-2.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > a')).click().then(function(){
                                        element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > div.container-fluid.campaignDetail.customTabContent > div > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-8.col-md-offset-2.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > auto-complete-widget > div > input')).sendKeys('tanakkraina@gmail.com')
                                        element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > div.container-fluid.campaignDetail.customTabContent > div > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-8.col-md-offset-2.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > div.action.text-center > button.btn.btn-success.btn-lg')).click();});
                                        */

                                           element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.action.text-center > button')).click();
                                           browser.sleep(2000);
                                        }); });
                                        })



           });
});//describe block

