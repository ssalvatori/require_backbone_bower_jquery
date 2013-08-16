define([
    'jquery',
    'underscore',
    'backbone',
    'collections/Cities'
], function(jquery, underscore, Backbone, CitiesCollection) {

    var autocompleteView = Backbone.View.extend({
        el: '#city',
        events: {
            "click .searchData": "searchData",
        },
        initialize: function() {
            //create collection
            this.collection = new CitiesCollection();

            //fill collection with json data
            this.getCities();
        },
        getCities: function() {
            var that = this;
            this.collection.fetch({
                error: function(model, xhr, options) {
                    console.log("Failed to fetch!");
                },
                success: function(collection) {
                    that.render();
                }
            });
        },
        render: function() {
            //set autocompletor behaviour
            this.$el.autocomplete({
                source: this.collection.getCitiesNames()
            });
        },
        searchData: function() {
            alert("focus");
        }

    });

    return autocompleteView;

});