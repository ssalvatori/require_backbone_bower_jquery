require(["jquery", "autocomplete", "underscore", "backbone"],
        function($, $$, _, Backbone) {
            var autocompleteView = Backbone.View.extend({
                initialize: function() {
                    this.myCollection = [
                        'Santiago',
                        'Concepción',
                        'Valparaiso',
                        'La Serena'
                    ];
                    console.log(this.myCollection);
                    this.render();
                },
                render: function() {
                    $$("#city").autocomplete({
                        source: this.myCollection
                    });
                    return this;
                }
            });

            return autocompleteView;
        });
        