
var AngularPage = require('../pageObject/page_object.js');
/*
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
    element(by.model('yourName')).sendKeys('Julie');
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
    browser.sleep(2000);
  });
});
*/
describe('angular js homepage',function(){
  it('should greet the  named user',function(){
   //var angularHomepage =  new AngularHomePage();
    AngularPage.get();

    AngularPage.setName('Tanak');

    expect(AngularPage.greeting()).toEqual('Hello Tanak!');
    browser.sleep(2000);
/*
    angularHomepage.addTodo('Add another todo');
    angularHomepage.clickAction();
    browser.sleep(3000); */
  });
});