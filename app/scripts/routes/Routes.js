define([
    'jquery',
    'underscore',
    'backbone',
    'views/Home',
], function($, _, Backbone, HomeView) {
  
  var Routes = Backbone.Router.extend({
    routes: {
      'home': 'showHome',
      '*actions': 'default'
    }
  });
  
  var initialize = function(){
    console.log('Router initialized');

    var appRouter = new Routes;
    
    appRouter.on('route:showHome', function(){
        console.log("show Home");
//      var homeView = new HomeView();
//      homeView.render();
    });

    appRouter.on('route:default', function (actions) {     
        console.log("default route");
        console.log("action: "+actions);
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start({ pushState: true, root: "/buscopension/app/index.html"});
  };

  return { 
    initialize: initialize
  };
})