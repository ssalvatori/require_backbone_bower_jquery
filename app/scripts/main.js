require.config({
    baseUrl: "scripts/",
    enforceDefine: true,
    paths: {
        'underscore': 'vendor/underscore-amd/underscore',
        'backbone': 'vendor/backbone-amd/backbone',
        'jquery': 'vendor/jquery/jquery',
        'jquery-ui': 'vendor/jquery-ui/ui/jquery-ui',
        'autocomplete': 'vendor/jquery-ui/ui/jquery.ui.autocomplete'
    },
    shim: {
        'autocomplete': {
            exports: "$",
            deps: ['jquery-ui']
        },
        'jquery-ui': {
            exports: "$",
            deps: ['jquery']
        },
        'underscore': {
            deps: [],
            exports: "_"
        },
        'backbone': {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        }
    }
});

require(["jquery", "autocomplete", "underscore", "backbone","Views/app"],
        function($,$$,  _, Backbone, View) {
            console.log("Test output");
            console.log("$: " + typeof $);
            console.log("_: " + typeof _);
            console.log("$$: " + typeof $$);
            console.log("Backbone: " + typeof Backbone);
            console.log("View: " +typeof View);
        }
);