require(["jquery", "autocomplete", "underscore", "backbone"], function($, $$, _, Backbone) {
    var View = Backbone.View.extend({
        initialize: function() {
            this.myCollection = [
                'Santiago',
                'Concepción',
                'Valparaiso',
                'La Serena'
            ];
        },
        render: function() {
            $$("#city").autocomplete({
                source: this.myCollection
            });
            return this;
        }

    })
});
