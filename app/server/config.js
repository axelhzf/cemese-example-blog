var config = require("cemese").config;

var configuration = {
  base: {
    db: {
      username: "root",
      password: "",
      database: "cemese-blog"
    }
  }
};

config.set(configuration);