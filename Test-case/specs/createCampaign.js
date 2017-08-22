describe('Campaign Create Spec' , function(){
                    beforeAll(function () {
                    browser.sleep(2000);  // wait for 2 minutes
                    });

                    var path = require('path');
                    browser.driver.manage().deleteAllCookies();                         
                    browser.driver.manage().window().maximize();
                    browser.get('http://givingapp-qa.stage-roundglass.com/login');
                    element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                    element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
          
                    element(by.buttonText('Login')).click().then(function(){
                    browser.sleep(3000);
                    element(by.cssContainingText('a','ADD NEW')).click();
                    browser.sleep(2000);

                    })
                    afterEach(function(){
                    browser.sleep(2000);
                    })
         
          it('should create a charity campaign' , function(){
                    element(by.cssContainingText('span','OVERVIEW')).getText().then(function (text) { console.log(text) });
                   // element(by.css('#tabbar div div ul li:nth-child(1) a')).getText().then(function (text) { console.log(text) });   
                    element(by.cssContainingText('option', 'Fundraising')).click(); 
                    element(by.cssContainingText('option', 'Charity')).click();         
                    element(by.id('campaignNameInput')).sendKeys(browser.params.Campaign_Name);
                    element(by.id('campaignSummaryInput')).sendKeys(browser.params.Campaign_Summary);      
                    browser.sleep(2000);        
                    element(by.cssContainingText('option', 'Elderly')).click();
                    //     element(by.tagName('fieldset')).element(by.className('form-control')).click();
                    //     element(by.tagName('fieldset')).element(by.tagName('input')).clear().sendKeys(5000); //campaign goal amount
                   
                    //      element(by.cssContainingText('option','INR')).click();
                    //      element(by.model('campaign.goalAmount')).sendKeys(browser.params.Campaign_Location);
                   element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > campaign-overview > div.container.form.createCampaign > div > form > div > div > div:nth-child(6) > div > div:nth-child(2) > div > auto-complete-widget > div > input')).sendKeys(browser.params.Campaign_Org);   
                   browser.sleep(3000);
                   expect(element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > campaign-overview > div.container.form.createCampaign > div > form > div > div > div:nth-child(6) > div > div:nth-child(2) > div > auto-complete-widget > div > div > div > li > a')).isPresent()).toBe(true);
                   element(by.buttonText('Create')).click();           
                                    });//Overview Block

                                    
                it('should enter campaign details' , function(){
                   element(by.cssContainingText('span','CAMPAIGN DETAILS')).getText().then(function (text) { console.log(text) });
                   element(by.cssContainingText('span','CAMPAIGN DETAILS')).click().then(function(){
                   browser.sleep(1000);
/*
                   var fileToUpload = '../data/pic.jpg';
                   var absolutePath = path.resolve(__filename, fileToUpload);
                   $('input[type="file"]').sendKeys(absolutePath);
                   browser.sleep(3000);
*/
                   element(by.id('simple-dropdown')).click().then(function(){
                   browser.sleep(3000);
                   element(by.cssContainingText('li','Paste YouTube Link')).click().then(function(){
                   element(by.css('#campaignDetail > div:nth-child(2) > div > div > div > div.filterList.dropdown-menu > div > textarea')).click()
                   element(by.css('#campaignDetail > div:nth-child(2) > div > div > div > div.filterList.dropdown-menu > div > textarea')).sendKeys(browser.params.Campaign_Banner_video);
                   browser.sleep(1500);
                   element(by.css('#campaignDetail > div:nth-child(2) > div > div > div > div.filterList.dropdown-menu > div > div > a.btn.btn-success')).click();
                   });
                   browser.sleep(1000);

                   var quillEditorElement = element(by.css('.textEditorContainer')); //expect ckEditor to be present
                   expect(quillEditorElement.isPresent()).toBe(true);
                   element(by.css('#campaignDetail > div:nth-child(3) > div > editor-quill > quill-editor > div.ql-container.ql-snow > div.ql-editor.ql-blank')).sendKeys(browser.params.Campaign_Description);
                   element(by.buttonText('Save')).click();
                   });
                  
                  }); });//Campaign Details Block

            it('should create a story',function(){
                   element(by.cssContainingText('span','OUR STORIES')).getText().then(function (text) { console.log(text) });
                   element(by.cssContainingText('span','OUR STORIES')).click().then(function(){
                   element(by.css('.storyPanels .panel .container .addPanel .addNewFile .btn')).click().then(function(){          

                    /*
                    var fileToUpload = '../data/pic.jpg';
                    var absolutePath = path.resolve(__filename, fileToUpload);
                    $('input[type="file"]').sendKeys(absolutePath);
                    browser.sleep(2000); 
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > story-list-widget > div > div > div.storyPanels > div > div:nth-child(2) > div > div > form > div.col-xs-12.text-center > div > input')).click();
                    */ 

                    element(by.id('storyTitleInput')).sendKeys(browser.params.story_Title);
                    element(by.id('storyDescriptionInput')).sendKeys(browser.params.story_Description);
                    element(by.css('.checkbox .btn-group .btn')).click();
                    element(by.buttonText('Save')).click();
                    });
                  }); })//Stories Block
                  
            it('should create a chapter' , function(){
                    element(by.cssContainingText('span','Chapters')).getText().then(function (text) { console.log(text) });
                    browser.waitForAngular();
                    browser.sleep(2000);
                    element(by.cssContainingText('span','Chapters')).click().then(function(){
                    browser.sleep(3000);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div > div > div > div > div > div > a')).click().then(function(){
                    browser.sleep(3000);
                    browser.executeScript('window.scrollTo(0,0);');
                    element(by.id('chapterTitleInput')).sendKeys(browser.params.chapter_Title);
                    element(by.id('chapterSummaryInput')).sendKeys(browser.params.chapter_Summary).then(function(){
                    element(by.id('chapterTitleInput')).click();
                    });
                    browser.sleep(2000);
             /*
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-10.col-md-offset-1.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > button')).click().then(function(){
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-10.col-md-offset-1.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > auto-complete-widget > div > input')).sendKeys(browser.params.Lead_Champ_id);  
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-10.col-md-offset-1.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > auto-complete-widget > div > div > div > li:nth-child(1) > div > div')).click(); 
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.tab-pane.active > chapter-overview-widget > div.row > form > div.col-md-10.col-md-offset-1.col-sm-12 > div.chapterChamp.form-group > div > invitation-popup-widget > div > div > div > div.action.text-center > button.btn.btn-success.btn-lg')).click();
                    browser.sleep(2000); 
                 
                  });*/
                   element(by.buttonText('Save')).click();
                   });
                   }); });//Chapter Block
                  
            it('should create an event',function(){
                    element(by.cssContainingText('span','EVENTS')).getText().then(function (text) { console.log(text) });
                    element(by.cssContainingText('span','EVENTS')).click().then(function(){
                    element(by.css('.outerPanel .container .addPanel .addNewFile .btn')).click().then(function(){        
                    element(by.id('eventTitleInput')).sendKeys(browser.params.event_Title);
                    element(by.id('eventDescriptionInput')).sendKeys(browser.params.event_Description);
                    element(by.id('eventVenueInput')).sendKeys(browser.params.event_Venue);
                    element(by.id('eventVenueAddressInput')).sendKeys(browser.params.event_VenueAddress);
                    element(by.id('RSVPLinkInput')).sendKeys(browser.params.event_RSVPLink);
                    element(by.buttonText('Save')).click();
                    });
                    }); });//Event Block
                  
              it('should add a sponsor to campaign ',function(){
                    element(by.cssContainingText('span','SPONSORS')).getText().then(function (text) { console.log(text) });
                    element(by.cssContainingText('span','SPONSORS')).click().then(function(){
                    element(by.css('.containerPanel .container .addPanel .addNewFile .btn')).click().then(function(){             
                    element(by.id('sponsorNameInput')).sendKeys(browser.params.sponsor_Name);                    
/*
                    var fileToUpload = '../data/pic.jpg';
                    var absolutePath = path.resolve(__filename, fileToUpload);
                    $('input[type="file"]').sendKeys(absolutePath);
                    browser.sleep(2000);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > sponsor-list-widget > div > div > div > div:nth-child(2) > div > div.container.form.text-left > div.row > div > div:nth-child(1) > div > div.col-sm-4.col-xs-12 > div > input')).click();
                    browser.sleep(2000);  */
                    browser.findElement(protractor.by.css('select option:nth-child(2)')).click();
                    element(by.buttonText('Save')).click();             
                    }); }); });//Sponsor Block

                it('should add FAQ to the campaign',function(){
                    element(by.cssContainingText('span','FAQ')).getText().then(function (text) { console.log(text) });
                    element(by.cssContainingText('span','FAQ')).click().then(function(){
                    element(by.css('.container .addPanel .addNewFile .btn')).click().then(function(){          
                    element(by.id('faqTitleInput')).sendKeys(browser.params.FAQ_question);
                    element(by.id('faqDescriptionInput')).sendKeys(browser.params.FAQ_answer);            
                    element(by.buttonText('Save')).click();
                    }); }); });//FAQ Block  
                
                  
                it('should manage campaign configurations' , function(){
                      element(by.cssContainingText('a','Configuration')).click().then(function(){   
                        /* Unit BASED Configuration            
                      element(by.css("label[for='unitBaseDonation']")).click().then(function(){
                      element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > donation-settings > div > div > div > div.form-group > fieldset > form > div > div.col-xs-12 > div > input')).sendKeys('Student');
                      element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > donation-settings > div > div > div > div.form-group > fieldset > form > div > div:nth-child(2) > div > input')).sendKeys('200');
                      element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > donation-settings > div > div > div > div.form-group > fieldset > form > div > div:nth-child(3) > div > div > input')).sendKeys('500');
                      }) */
                    element(by.css("label[for='includeAddress']")).click();
                    element(by.cssContainingText('option', 'First Name')).click();
                   /* expect(element(by.id('donationMatching')).isEnabled()).toBe(true);
                    expect(element(by.id('includeAddress')).isEnabled()).toBe(true);
                    element(by.css('.action .btn:nth-child(1)')).click();
                    element(by.id('donationMatching')).isSelected().then(function(selected) {
                    if (selected) {
                    console.log('donation matching checkbox is selected');
                    element(by.id('donationMatching')).click();
                    } }); */


                  element(by.buttonText('Save')).click();
           }); });

           it('should check logout to be successful',function(){
                    element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.dropdown.profile')).click().then(function(){
                    element(by.cssContainingText('a', 'Log Out')).click();
                    
                    })
                  }); // it block-successful logout

},300000);//describe block

// Submitting campaign ----EULA is a restriction
/*
            it('should submit the campaign',function(){
              element(by.css('#fundraising-app-holder > div > create-campaign > div > create-campaign-banner > div > div > div > span > a > span')).click();
              element(by.cssContainingText('button','Agree')).click();
              browser.sleep(1000);
               element(by.css('#DeleteMsg > div > div > div.modal-footer.text-center > span:nth-child(1) > button')).click();
          })
*/

