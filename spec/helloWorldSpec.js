var request = require("request");

describe("Hello World Server", function(){
  describe("get /", function(){
    it ("returns status code 200",function(){
      request.get("http://localhost:3000", function(error, response, body){
        expect(response.statusCode).toBe(200);
        done();//synchronize it with its expect
      });
    });
    it("returns Hello World", function(done) {
      request.get("http://localhost:3000?number=3", function(error, response, body) {
        expect(body).toBe(JSON.stringify(["Hello World", "Hello World", "Hello World"]));
        done();
      });
    });
  });

});
