require.config({
    baseUrl: 'scripts/',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        "underscore":"vendor/underscore",
        'backbone':'vendor/backbone',
        'jquery':'vendor/jquery',
        'bootstrap':'vendor/bootstrap'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: "$.fn.popover"
        }
    },
});

/*
require(["jquery",
    "underscore",
    "backbone",
    "bootstrap",
    "views/Autocomplete"],
        function($, underscore, Backbone, Bootstrap, autocompleteView) {
            "use strict";
            $("#navSearch").tooltip();
            var autocomplete_view = new autocompleteView();
        }
);
*/

require([
  'App'
  ], function(App) {
    App.initialize();
  }
);