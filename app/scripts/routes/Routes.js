define([
    'views/Home',
    'views/Contact',
], function(HomeView, ContactView) {
  
  var Routes = Backbone.Router.extend({
    routes: {
        'home': 'showHome',
        'contact':  'showContact',
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
      
    appRouter.on('route:showContact', function() {
        console.log("show Contact");
        var contactView = new ContactView();
        contactView.render();
    });

    appRouter.on('route:default', function (actions) {     
        console.log("default route");
        console.log("action: "+actions);
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start({ 
    //    pushState: true, 
        root: "/buscopension/app/"
    });
  };

  return { 
    initialize: initialize
  };
})