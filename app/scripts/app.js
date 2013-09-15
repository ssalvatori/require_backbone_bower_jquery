define([
  'jquery', 
  'underscore', 
  'backbone',
  'routes/Routes',
], function($, _, Backbone, Routes){
  var initialize = function() {
    Routes.initialize();
  };

  return { 
    initialize: initialize
  };
});