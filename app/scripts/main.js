require.config({
    baseUrl: 'scripts/',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        underscore: 'vendor/underscore',
        backbone:   'vendor/backbone',
        jquery:     'vendor/jquery',
        bootstrap:  'vendor/bootstrap',
        text:       'vendor/text',
        layoutmanager: 'vendor/backbone.layoutmanager'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: "$.fn.popover"
        },
/*        backbone: {
            deps: ['jquery', 'underscore'],
            exports: "Backbone"
        },*/
        layoutmanager: {
            deps: ["backbone"],
            exports: "Backbone.Layout"
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