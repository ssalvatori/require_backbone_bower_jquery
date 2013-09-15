define(['underscore', 'backbone',
  'vendor/text!../templates/map.tpl' ], 
function (_, Backbone, mapTemplate) {

    var mapView = Backbone.View.extend({
        el: '#mapCanvas',
        
        template: mapTemplate,

        initialize: function() {
            
        },
        
        render: function() {				            
            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;
        },

    });

    return mapView;
});