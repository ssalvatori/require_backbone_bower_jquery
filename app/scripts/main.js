require.config({
    baseUrl: "scripts/",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'underscore': 'vendor/underscore-min',
        'backbone': 'vendor/backbone-min',
        'jquery': 'vendor/jquery.min',
        'jquery.ui': 'vendor/jquery-ui.min',
        'jquery.ui.autocomplete': 'vendor/jquery.ui.autocomplete.min'
    },
    shim: {
        'jquery.ui.autocomplete': ['jquery.ui'],
        'jquery.ui': ['jquery'],
        'underscore': {
            exports: "_"
        },
        'backbone': {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        }
    }
});

require(["jquery",
    "jquery.ui.autocomplete",
    "underscore",
    "backbone",
    "views/Autocomplete"],
        function(jquery, autocomplete, underscore, Backbone, autocompleteView) {
            var autocomplete_view = new autocompleteView();
            //autocomplete_view.render();
        }
);