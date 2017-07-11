var AngularHomePage = require('../pageObject/createCampaign-po.js');

describe('creating campaigns' , function(){
           // browser.driver.manage().window().maximize();
 
       /*
       
        browser.get('http://givingapp-qa.stage-roundglass.com/login');
                    element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                    element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
                    element(by.css('.loginForm button[type="submit"]')).click().then(function(){
                    browser.sleep( 2000 );

                   });*/

         

 it('should create a charity campaign' , function(){
     
      
        createPage.get();
       
        expect(createPage.getDisplayText()).toEqual('Please Login');
        browser.sleep(2000);
/*
        element(by.id('campaignNameInput')).sendKeys(browser.params.Campaign_Name);
        element(by.id('campaignSummaryInput')).sendKeys(browser.params.Campaign_Summary);      
        browser.sleep(2000);        
        element(by.cssContainingText('option', 'Elderly')).click();

        browser.sleep(3000);

        browser.sleep(3000);

        element(by.css('.action .btn:nth-child(1)')).click();

        });

*/
            

});
});