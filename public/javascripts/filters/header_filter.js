angular.module('headerFilter', []).filter('replaceContent', function() {
  return function(activeHeader) {
    if (activeHeader == "about") {
      return "Who I am"
    }
    if (activeHeader == "resume") {
      return "What I've done"
    }
    if (activeHeader == "portfolio") {
      return "Some of my favorites"
    }
    if (activeHeader == "contact") {
      return "Get in touch with me"
    }
  };
});


