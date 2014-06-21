var cemese = require("cemese");

module.exports = cemese.models.create("Tag", {
  title: {
    ctype: "text",
    label: "Título",
    validate: {
      notEmpty: true
    }
  }
});


