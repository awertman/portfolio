app.factory('portfolioContent', function() {
  searchItems = {
    collection: PORTFOLIODATA
  }
  return searchItems
})


PORTFOLIODATA = [ {
              title: "Codefusion",
              imageLink: "images/ember.png",
              description: "Tool designed to helpers programming instructors share code with students. This app allows instructors to share their code live, while students can take notes on a web platform.",
              technology: "Javascript app leveraging Node/Ember.js and a Firebase database.",
              githubLink:"https://github.com/awertman/",
              liveLink: "http://codefusion.io/#/classrooms/demo",
              websiteLink:""},

           {
              title: "Brand-img",
              imageLink: "images/rails.png",
              description: "Small businesses resources that helps users understand how customers are talking about their brand. Instagram data is analyzed by comparing correlations between different hash tags used in conjunction with the brand.",
              technology: "Ruby on Rails app using Postgres database and Instagram API.",
              githubLink:"https://github.com/awertman/",
              websiteLink:""},

           {
              title: "eCommerce Data",
              imageLink: "images/angular.png",
              description: "Interactive chart designed to help small business understand how eCommerce is changing in their marketplace.",
              technology: "Javascript app with Angular.js framework and Highcharts for visual interface.",
              githubLink:"https://github.com/awertman/",
              websiteLink:""},

           {
              title: "vanilla Worm",
              imageLink: "images/javascript.png",
              description: "Game of Worm written in vanilla Javascript using HTML5 canvas.",
              technology: "pure Javascript and HTML5 canvas.",
              githubLink:"https://github.com/awertman/vanillaWorm",
              websiteLink:""},

           {
              title: "This website..",
              imageLink: "images/angular.png",
              description: "My personal website written Javascript with Angular.js framework.",
              technology: "Angular.js.",
              githubLink:"https://github.com/awertman/",
              websiteLink:""}

  ]