var cemese = require("cemese");
var Tag = require("./Tag");

var Post = cemese.models.create("Post", {
  title: {
    ctype: "text",
    label: "Título",
    validate: {
      notEmpty: true
    }
  },
  content: {
    ctype: "markdown",
    label: "Contenido"
  }
});
Post.hasOne(Tag, {
  label: "Tag"
});

module.exports = Post;

