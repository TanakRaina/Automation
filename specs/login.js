describe('Login Page Test Spec -Phase 1' , function(){
                browser.driver.manage().deleteAllCookies();
                browser.driver.manage().window().maximize();
                browser.get(browser.params.TestEnv);   
      beforeEach(function(){ 
                element(by.id('emailInput')).click().clear();
                element(by.id('passwordInput')).click().clear();
                browser.sleep(2000);
                });//beforeEach block

       it('should check login with invalid email(like abcdef)' , function(){
                element(by.id('emailInput')).sendKeys(browser.params.invalidEmail1)
                element(by.id('passwordInput')).sendKeys(browser.params.validPwd).then(function (){
                browser.sleep( 2000 );
                expect(element(by.cssContainingText('.errorMsg', 'Invalid email address')).getText()).toEqual('Invalid email address');
                });
                }); //it block -invalid id
       it('should check login with invalid email(like abc.com)' , function(){
                element(by.id('emailInput')).sendKeys(browser.params.invalidEmail2)
                element(by.id('passwordInput')).sendKeys(browser.params.validPwd).then(function (){
                browser.sleep( 2000 );
                expect(element(by.cssContainingText('.errorMsg', 'Invalid email address')).getText()).toEqual('Invalid email address');
                 });
                 }); //it block -invalid id

       it('should check login with invalid email(like abc.com@gmail)' , function(){
                element(by.id('emailInput')).sendKeys(browser.params.invalidEmail3)
                element(by.id('passwordInput')).sendKeys(browser.params.validPwd).then(function (){
                browser.sleep( 2000 );
                expect(element(by.cssContainingText('.errorMsg', 'Invalid email address')).getText()).toEqual('Invalid email address');
                });
                }); //it block -invalid id

       it('should check login with invalid password(less than 6 characters)' ,function(){
                  element(by.id('emailInput')).sendKeys(browser.params.validEmail)
                  element(by.id('passwordInput')).sendKeys(browser.params.invalidPwd1).then(function (){
                  browser.sleep( 2000 );
                  element(by.id('emailInput')).click();
                  expect(element(by.xpath('//*[@id="fundraising-app-holder"]/div/fundraiser-user/div/div[2]/div/div/div/div[4]/div/login-user-widget/form/div[2]/div/control-messages/div')).getText()).toEqual('Invalid password. Password must be of at least 6 characters long and should contain a number');
                  });
                  });//it block -invalid pwd

       it('should check login with invalid password(without any number)' ,function(){
                  element(by.id('emailInput')).sendKeys(browser.params.validEmail)
                  element(by.id('passwordInput')).sendKeys(browser.params.invalidEmail1).then(function (){
                  browser.sleep( 2000 );
                  element(by.id('emailInput')).click();
                  expect(element(by.xpath('//*[@id="fundraising-app-holder"]/div/fundraiser-user/div/div[2]/div/div/div/div[4]/div/login-user-widget/form/div[2]/div/control-messages/div')).getText()).toEqual('Invalid password. Password must be of at least 6 characters long and should contain a number');
                  });
                  });//it block -invalid pwd
       
       it('should check alert on incorrect credentials',function(){
                element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                element(by.id('passwordInput')).sendKeys(browser.params.incorrectPwd);
                element(by.css('.loginForm button[type="submit"]')).click().then(function(){
                browser.sleep(2000);
                element.all(by.css('CustomAlert'));
                expect(element(by.css('.alertHeader  h1:nth-child(1)')).getText()).toEqual('Error');
                expect(element(by.css('.innerBody  div:nth-child(1)')).getText()).toEqual('You have entered an incorrect email address and/or password. Please try again.');
                element(by.css('.alertFooter  button:nth-child(1)')).click();});

                })//itblock-incorrect credentials

       it('should check alert for unregistered id',function(){
                element(by.id('emailInput')).sendKeys(browser.params.unregisteredEmail);
                element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
                element(by.css('.loginForm button[type="submit"]')).click().then(function(){
                browser.sleep(2000);
                element.all(by.css('CustomAlert'));
                expect(element(by.css('.alertHeader  h1:nth-child(1)')).getText()).toEqual('Error');
                expect(element(by.css('.innerBody  div:nth-child(1)')).getText()).toMatch('You have entered an email address which doesnot match our records.');
                element(by.css('.alertFooter  button:nth-child(1)')).click();});

                })//itblock-unregistered user

});



describe('Login Page Test Spec - Phase 2' , function(){

       beforeEach(function(){
               browser.driver.manage().deleteAllCookies();
               browser.driver.manage().window().maximize();
               browser.get(browser.params.TestEnv);
               }) //beforeEach block
       
       it('should check login  against blank email', function(){

                element(by.id('emailInput')).sendKeys('');
                element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
                element(by.id('emailInput')).click().then(function (){
                browser.sleep( 2000 );
                expect(element(by.cssContainingText('.errorMsg', 'Required')).getText()).toEqual('Required');

                });
                });//it block -blank inputs
        
        it('should check login  against blank password input',function(){

                element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                element(by.id('passwordInput')).sendKeys('').then(function (){
                browser.sleep(2000);
                element(by.id('emailInput')).click();
                expect(element(by.cssContainingText('.errorMsg', 'Required')).getText()).toEqual('Required');
                }); });//it block-blank pwd

       
       it('should check correct password recovery' ,function(){
                element(by.css('.form-action  p:nth-child(2)  a:nth-child(1)')).click().then(function (){
                browser.sleep( 2000 );
                element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                element(by.css('.form-action p:nth-child(1)  .btn')).click().then(function(){
                browser.sleep(2000);
                element.all(by.css('CustomAlert'));
                expect(element(by.css('.alertHeader  h1:nth-child(1)')).getText()).toEqual('Password Recovery');
                expect(element(by.css('.innerBody  div:nth-child(1)')).getText()).toMatch('Password reset link is succesfully sent to registered email');
                element(by.css('.alertFooter  button:nth-child(1)')).click();});
                });
                });//it block -recover password


       it('should check alert message on invalid email password recovery' ,function(){
                element(by.css('.form-action  p:nth-child(2)  a:nth-child(1)')).click().then(function (){
                browser.sleep( 2000 );
                element(by.id('emailInput')).sendKeys(browser.params.unregisteredEmail);
                element(by.css('.form-action p:nth-child(1)  .btn')).click().then(function(){
                browser.sleep(2000);
                element.all(by.css('CustomAlert'));
                expect(element(by.css('.alertHeader  h1:nth-child(1)')).getText()).toEqual('Error');
                expect(element(by.css('.innerBody  div:nth-child(1)')).getText()).toContain('which doesnot match our records. Please check again.');
                element(by.css('.alertFooter  button:nth-child(1)')).click();});
                });
                });//it block -recover password

       it('should check GO BACK button on password recovery page' , function(){
                element(by.css('.form-action  p:nth-child(2)  a:nth-child(1)')).click();
                element(by.css('.form-action p:nth-child(2)  .btn')).click();
                browser.driver.wait(function(){
                return browser.driver.getCurrentUrl().then(function(url){
                return (/login/).test(url);
                });
                expect(browser.getCurrentUrl()).toMatch('/login');});
                 });  //it block - go back

       it('should check facebook login',function(){
                 element.all(by.css('.fullWidthBtn a')).first().click().then(function(){
                 expect(browser.driver.getCurrentUrl()).toContain('facebook');})
                 }); //it block-facebook login

       it('should check google login',function(){
                 element.all(by.css('.fullWidthBtn a')).last().click().then(function(){
                 expect(browser.driver.getCurrentUrl()).toMatch('google');})
                 }); //it block-google login

       it('should check login to be successful' , function(){
               element(by.id('emailInput')).sendKeys(browser.params.validEmail);
               element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
               element(by.css('.loginForm button[type="submit"]')).click().then(function(){
               browser.sleep( 2000 );
               browser.driver.wait(function(){
               return browser.driver.getCurrentUrl().then(function(url){
               return (/profile/).test(url);
               });
               expect(browser.getCurrentUrl()).toMatch('/profile');});});

               }); //it block- successful login

       it('should check logout to be successful',function(){
                element(by.css('#navbar ul.nav.navbar-nav.navbar-right.right-menu li.dropdown.profile a')).click();
                element(by.css('#userMenu li:nth-child(6) a')).click();
                browser.sleep(2000);

       }); // it block-successful logout 
          
}); //describe block 
