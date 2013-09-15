define([
    'backbone',
], function(Backbone) {
    var contactModel = Backbone.Model.extend({
        urlRoot: "http://localhost:3000/contact",
    
        defaults: {
            name: '',
            email: '',
            message: ''
        },
        
        initialize: function(){
            console.log("initialize contact model");
        }
    });
    
    return contactModel;
});