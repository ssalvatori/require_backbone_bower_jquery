define([
    'jquery',
    'underscore',
    'backbone',
], function(jquery, underscore, Backbone) {
    var autocompleteView = Backbone.View.extend({
        initialize: function() {
            this.myCollection = [
                'Santiago',
                'Concepción',
                'Valparaiso',
                'La Serena'
            ];
        },
        el: '#city',
        events: {
            'keydo': 'showAlert'
        },
                
        render: function() {
            this.$el.autocomplete({
                source: this.myCollection
            });
        },
                
        showAlert: function() {
            alert("focus");
        }
        
    });

    return autocompleteView;

});