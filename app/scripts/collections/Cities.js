define([
    'jquery',
    'underscore',
    'backbone',
    'models/City'
], function(jquery, underscore, Backbone, CityModel) {
    var CitiesCollection = Backbone.Collection.extend({
        url: function() {
            return '../server/cities.json';
        },
        model: CityModel,
        parse: function(response) {
            return response.cities;
        },
        getCitiesNames: function() {
            var cities = [];
            _.each(this.models, function(city) {
                cities.push(city.get('name'));
            });

            return cities;

        }
    });
    return CitiesCollection;
});