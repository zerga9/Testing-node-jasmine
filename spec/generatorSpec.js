var generator = require("../app/generator");

describe("Hello World Generator", function(){

  it("returns an array", function(){
    expect(generator.generateHelloWorld(0)).toEqual([]);
  });

  it("returns the correct number of Hello Worlds", function(){
    var result = generator.generateHelloWorld(3);

    expect(result.length).toBe(3);
  });

  it ("returns only Hello Worlds", function(){
    var result = generator.generateHelloWorld(3);

    result.forEach(function(element){
      expect(element).toBe("Hello World");
    });
  });
});
