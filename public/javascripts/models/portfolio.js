app.factory('portfolioContent', function() {
  portfolioItems = {
    collection: PORTFOLIODATA
  }
  return portfolioItems
})


PORTFOLIODATA = [ {
              title: "Codefusion.io",
              imageLink: ["images/ember.png","images/firebase.png","images/node.png"],
              description: "Tool designed to helpers programming instructors share code with students. This app allows instructors to share their code live, while students can take notes on a web platform.",
              technology: "Javascript app leveraging Node/Ember.js and a Firebase database.",
              githubLink:"https://github.com/awertman/codefusion-app",
              liveLink: "http://codefusion.io/#/classrooms/demo"},


           {
              title: "Destination Finder",
              imageLink: ["images/angular.png", "images/mongo.png","images/node.png"],
              description: "Listing of top rated destinations for 2014 that allows for filtering by keyword, and view changes by grid or list view.",
              technology: "Javascript app on Node with Angular.js framework and MongoDB.",
              githubLink:"https://github.com/awertman/destinationFinder",
              liveLink:"http://destinationfinder.herokuapp.com/"},

           {
              title: "Brand-img",
              imageLink: ["images/rails.png"],
              description: "Small businesses resources that helps users understand how customers are talking about their brand. Instagram data is analyzed by comparing correlations between different hash tags used in conjunction with the brand.",
              technology: "Ruby on Rails app using Postgres database and Instagram API.",
              githubLink:"https://github.com/awertman/brand-img",
              liveLink:"http://brand-img.herokuapp.com"},

           {
              title: "vanilla Worm",
              imageLink: ["images/javascript.png"],
              description: "Game of Worm written in vanilla Javascript using HTML5 canvas.",
              technology: "pure Javascript and HTML5 canvas.",
              githubLink:"https://github.com/awertman/vanillaWorm",
              liveLink:"http://awertman.github.io/vanillaWorm/"},

          // {
          //     title: "eCommerce Data",
          //     imageLink: ["images/angular.png"],
          //     description: "Interactive chart designed to help small business understand how eCommerce is changing in their marketplace.",
          //     technology: "Javascript app with Angular.js framework and Highcharts for visual interface.",
          //     githubLink:"https://github.com/awertman/",
          //     websiteLink:""},

           {
              title: "This website..",
              imageLink: ["images/angular.png"],
              description: "My personal website written in Javascript with Angular.js framework.",
              technology: "Angular.js.",
              githubLink:"https://github.com/awertman/portfolio_website"}

  ]