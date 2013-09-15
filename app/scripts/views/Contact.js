define(['underscore', 'backbone', 'jquery',
  'vendor/text!../templates/contact.tpl', 'models/Contact' ], 
function (_, Backbone, $ ,contactTemplate,contactModel) {

    var ContactView = Backbone.View.extend({
        el: '#body',
        
        events: {
            "click .submit": "sendForm"
        },
        
        template: contactTemplate,

        initialize: function() {
            console.log("initialize contact");
        },
        
        render: function() {				
            console.log("rendering contactView");  
            
            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;
                        

        },
        
        sendForm: function(data) {
            
            var contactData = {
                name: $("#contactName").val(),
                email: $("#contactEmail").val(),
                message: $("#contactMessage").val(),
            };
            
            var contact= new contactModel();
            
            console.log(contactData);
            
            contact.save(contactData, { 
                success: function (user) {
                    console.log("contact data sent");
                },
                error: function(contact) {
                    console.log("error");
                }
            });
            
        }

    });

    return ContactView;
});