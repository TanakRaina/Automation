var AngularHomePage = require('../pageObject/page_object2.js');

describe('angular js homepage',function(){
    var page;

    beforeEach(function(){
        page = new AngularHomePage();
    });

  it('should greet the  named user',function(){
    var a=page.pageText
    console.log(a)
    expect(a.isPresent()).toBeTruthy();
    browser.sleep(2000);
  });

  it('should add a todo',function(){
      page.addTodo('adding 3rd todo');
      browser.sleep(2000);
  });
});

  // page.typeName('Tanak');
   browser.sleep(2000);
  //expect(page.greetingText).toMatch('Hello Tanak!');

  