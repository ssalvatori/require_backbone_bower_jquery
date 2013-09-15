define(['underscore', 'backbone',
  'vendor/text!../templates/search.tpl' ], 
function (_, Backbone, searchTemplate) {

    var searchView = Backbone.View.extend({
        el: '#searchCity',
        
        template: searchTemplate,

        initialize: function() {            
        },
        
        render: function() {				            
            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;
        },

    });

    return searchView;
});