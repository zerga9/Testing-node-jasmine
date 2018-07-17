var request = require("request");

var base_url = "http://localhost:3000/"

describe("Hello World Server", function(){
  describe("get /", function(){
    it ("returns status code 200",function(){
      request.get(base_url, function(error, response, body){
        expect(response.statusCode).toBe(200);
        done();//synchronize it with its expect
      });
    });
    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        done();
      });
    });
  });

});
