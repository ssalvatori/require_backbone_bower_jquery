require.config({
    baseUrl: "scripts/",
    paths: {
        'underscore': 'vendor/underscore-amd/underscore',
        'backbone': 'vendor/backbone-amd/backbone',
        'jquery': 'vendor/jquery/jquery',
        'jquery.ui': 'vendor/jquery-ui/ui/jquery-ui',
        'jquery.ui.autocomplete': 'vendor/jquery-ui/ui/jquery.ui.autocomplete'
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
    "views/AutocompleteView"],
        function(jquery, autocomplete, underscore, Backbone, autocompleteView) {

            var autocomplete_view = new autocompleteView();
            autocomplete_view.render();
        }
);