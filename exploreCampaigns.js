describe('Test exploring campaigns' , function(){

           it('should check campaigns on explore' , function(){
           browser.driver.manage().window().maximize();
           browser.driver.manage().deleteAllCookies();
           browser.get('http://givingapp.stage-roundglass.com/');
           element(by.css('#navbar  ul  li:nth-child(1)  a')).click();
                  browser.sleep( 2000 );
           element(by.css('.campaignWiget div:nth-child(1)')).click();
            
               browser.driver.wait(function(){
               return browser.driver.getCurrentUrl().then(function(url){
               return (/campaign/).test(url);
               });
               expect(browser.getCurrentUrl()).toMatch('/campaign');});});

               });
           
          
      