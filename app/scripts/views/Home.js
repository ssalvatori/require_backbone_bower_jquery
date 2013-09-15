define(['underscore', 'backbone',    
        'views/Search',
        'views/Map',
        'vendor/text!../templates/home.tpl' 
       ], 
function (_, Backbone, searchView, mapView) {

    var HomeView = Backbone.View.extend({
        el: '#body',
        
        template: _.template(""),
        
        initialize: function() {
            this.searchSubView = new searchView();
            this.mapSubView = new mapView();
        },
                
        render : function () {
            this.$el.html(this.template());
        
            this.assign({
                '#searchCity'   : this.searchSubView,
                '#mapCanvas'    : this.mapView,
            });
            return this;
        },
        assign : function (selector, view) {
            var selectors;
            if (_.isObject(selector)) {
                selectors = selector;
            }
            else {
                selectors = {};
                selectors[selector] = view;
            }
            if (!selectors) return;
            _.each(selectors, function (view, selector) {
                view.setElement(this.$(selector)).render();
            }, this);
        }
 
    });

    return HomeView;
});