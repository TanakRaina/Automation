describe('Campaign Create Spec' , function(){
           var path = require('path');
                    browser.driver.manage().window().setSize(1280, 1024);
                    browser.driver.manage().deleteAllCookies();
                    browser.get('http://givingapp-qa.stage-roundglass.com/login');
                    element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                    element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
                    element(by.css('.loginForm button[type="submit"]')).click().then(function(){
                    browser.sleep( 2000 );

                    return browser.driver.getCurrentUrl().then(function(url){
                    return (/profile/).test(url);
                    
                    expect(browser.getCurrentUrl()).toMatch('/profile');});
                    });

          afterEach(function(){
          browser.sleep(3000);
          browser.executeScript('window.scrollTo(0,0);');
          });


           it('should create a charity campaign' , function(){
/*                  
                    element(by.css('#navbar  ul  li:nth-child(4)  a')).click(); //click on NEW CAMPAIGN tab. */
                    browser.get('http://givingapp-qa.stage-roundglass.com/create');
                    browser.sleep(2000);
                    element(by.css('#tabbar div div ul li:nth-child(1) a span')).getText().then(function (text) { console.log(text) }); 
                    //     element(by.cssContainingText('option', 'Personal')).click();
                    element(by.id('campaignNameInput')).sendKeys(browser.params.Campaign_Name);
                    element(by.id('campaignSummaryInput')).sendKeys(browser.params.Campaign_Summary);      
                    browser.sleep(2000);        
                    element(by.cssContainingText('option', 'Elderly')).click();
                    //     element(by.tagName('fieldset')).element(by.className('form-control')).click();
                    //     element(by.tagName('fieldset')).element(by.tagName('input')).clear().sendKeys(5000); //campaign goal amount
                    browser.sleep(3000);
                    //      element(by.cssContainingText('option','INR')).click();
                    //      element(by.model('campaign.goalAmount')).sendKeys(browser.params.Campaign_Location);
                    browser.sleep(3000);
                    element(by.css('.action .btn:nth-child(1)')).click();

                    });

         it('should enter campaign details' , function(){
                   element(by.css('#tabbar div div ul li:nth-child(2) a')).getText().then(function (text) { console.log(text) });
                   element(by.css('#tabbar div div ul li:nth-child(2) a')).click().then(function(){
                   browser.sleep(2000);

                   var fileToUpload = 'specs/pic.png';
                   var absolutePath = path.resolve(__filename, fileToUpload);
                   $('input[type="file"]').sendKeys(absolutePath);
                   browser.sleep(3000);

                   element(by.id('simple-dropdown')).click().then(function(){
                   browser.sleep(3000);

                   element(by.css('.uploadBtn')).click()
                   browser.sleep(8000);

                   var quillEditorElement = element(by.css('.textEditorContainer'));                                                                              //expect ckEditor to be present
                   expect(quillEditorElement.isPresent()).toBe(true);
                   element(by.css('#fundraising-app-holder > div > create-campaign > div > div.action.text-center.individual > span > button')).click();
                   });
                   });

                   });


           it('should create a story',function(){
                    element(by.css('#tabbar div div ul li:nth-child(3) a')).getText().then(function (text) { console.log(text) });
                    element(by.css('#tabbar div div ul li:nth-child(3) a')).click().then(function(){

                    element(by.css('.storyPanels .panel .container .addPanel .addNewFile .btn')).click().then(function(){
                    browser.sleep(3000);


                    var fileToUpload = '../data/pic.jpg';

                    var absolutePath = path.resolve(__filename, fileToUpload);
                    $('input[type="file"]').sendKeys(absolutePath);
                    browser.sleep(2000);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > story-list-widget > div > div > div.storyPanels > div > div:nth-child(2) > div > div > form > div.col-xs-12.text-center > div > input')).click();


                    browser.sleep(3000);
                    element(by.id('storyTitleInput')).sendKeys(browser.params.story_Title);
                    element(by.id('storyDescriptionInput')).sendKeys(browser.params.story_Description);
                    element(by.css('.checkbox .btn-group .btn')).click();
                    browser.sleep(3000);
                    element(by.css('.row .action .btn:nth-child(1)')).click();
                    });
                    }); });

           it('should create an event',function(){
                    element(by.css('#tabbar div div ul li:nth-child(5) a')).getText().then(function (text) { console.log(text) });
                    element(by.css('#tabbar div div ul li:nth-child(5) a')).click().then(function(){

                    element(by.css('.outerPanel .container .addPanel .addNewFile .btn')).click().then(function(){
                    browser.sleep(3000);

                    element(by.id('eventTitleInput')).sendKeys(browser.params.event_Title);
                    element(by.id('eventDescriptionInput')).sendKeys(browser.params.event_Description);
                    element(by.id('eventVenueInput')).sendKeys(browser.params.event_Venue);
                    element(by.id('eventVenueAddressInput')).sendKeys(browser.params.event_VenueAddress);
                    element(by.id('eventVenueInput')).sendKeys(browser.params.event_Venue);

                    browser.sleep(3000);
                    element(by.css('.container .action .btn:nth-child(1)')).click();
                    });
                    }); });


           it('should add a sponsor to campaign ',function(){
                    element(by.css('#tabbar div div ul li:nth-child(6) a')).getText().then(function (text) { console.log(text) });
                    element(by.css('#tabbar div div ul li:nth-child(6) a')).click().then(function(){

                    element(by.css('.containerPanel .container .addPanel .addNewFile .btn')).click().then(function(){
                    browser.sleep(3000);

                    element(by.id('sponsorNameInput')).sendKeys(browser.params.sponsor_Name);

                    var fileToUpload = '../data/pic.jpg';

                    var absolutePath = path.resolve(__filename, fileToUpload);
                    $('input[type="file"]').sendKeys(absolutePath);
                    browser.sleep(2000);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > sponsor-list-widget > div > div > div > div:nth-child(2) > div > div.container.form.text-left > div.row > div > div:nth-child(1) > div > div.col-sm-4.col-xs-12 > div > input')).click();
                    browser.sleep(2000);
                    browser.findElement(protractor.by.css('select option:nth-child(2)')).click();

                    browser.sleep(3000);
                    element(by.css('.container .action .btn:nth-child(1)')).click();
                    });
                    }); });

           it('should add FAQ to the campaign',function(){
                    element(by.css('#tabbar div div ul li:nth-child(8) a')).getText().then(function (text) { console.log(text) });
                    element(by.css('#tabbar div div ul li:nth-child(8) a')).click().then(function(){

                    element(by.css('.container .addPanel .addNewFile .btn')).click().then(function(){
                    browser.sleep(3000);

                    element(by.id('faqTitleInput')).sendKeys(browser.params.FAQ_question);
                    element(by.id('faqDescriptionInput')).sendKeys(browser.params.FAQ_answer);
                    browser.sleep(3000);
                    element(by.css('.container .action .btn:nth-child(1)')).click();
                    });
                    }); });

/*
           it('should create a chapter' , function(){
                    element(by.css('#tabbar div div ul li:nth-child(4) a')).getText().then(function (text) { console.log(text) });
                    browser.waitForAngular();
                    browser.sleep(2000);
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

                                                            element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > div.container-fluid.campaignDetail.customTabContent > div > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-8.col-md-offset-2.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > a')).click().then(function(){
                                                            element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > div.container-fluid.campaignDetail.customTabContent > div > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-8.col-md-offset-2.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > auto-complete-widget > div > input')).sendKeys('tanakkraina@gmail.com')
                                                            element(by.css('#fundraising-app-holder > div > manage-campaign-widget > div > div > div.container-fluid.campaignDetail.customTabContent > div > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-8.col-md-offset-2.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > div.action.text-center > button.btn.btn-success.btn-lg')).click();});


                                                               element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.action.text-center > button')).click();
                                                               browser.sleep(2000);
                                                            }); });
                    }); });
                    });//it block-create chapter
*/

           it('should check logout to be successful',function(){
                                  element(by.css('#navbar ul.nav.navbar-nav.navbar-right.right-menu li.dropdown.profile')).click().then(function(){
                                  element(by.css('#userMenu li:nth-child(6) a')).click();
                                  })

                                  browser.sleep(2000);

                                  }); // it block-successful logout


});//describe block
/*
it('should manage campaign configurations' , function(){

                    element(by.css('#tabbar div div ul li:nth-child(9) a')).click().then(function(){
                    expect(element(by.id('donationMatching')).isEnabled()).toBe(true);
                    expect(element(by.id('includeAddress')).isEnabled()).toBe(true);
                    element(by.css('.action .btn:nth-child(1)')).click();




                    element(by.id('donationMatching')).isSelected().then(function(selected) {
                    if (selected) {
                    console.log('donation matching checkbox is selected');
                    element(by.id('donationMatching')).click();
                    }

                    });

                    element(by.id('includeAddress')).isSelected().then(function(selected) {
                    if (selected) {
                    console.log('includeAddress checkbox is selected');
                    element(by.id('includeAddress')).click();
                    }
                    });



           }); });
*/
