var co = require("co");
var cemese = require("cemese");

var config = require("./config");
var Post = require("./model/Post");
var Tag = require("./model/Tag");

cemese.server.get("/", function *() {
  var posts = yield Post.findAll();
  this.body = posts;
});

co(function* () {
  yield cemese.server.start();
})();
