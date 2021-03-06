﻿dojo.require("epi.cms.ErrorDialog");

/*
(function () {
    return {
        uiCreated: function (namingContainer, settings) {

            // Add your custom logic here to interact with the rendered controls
            // You can find more information about Dojo at http://dojotoolkit.org/documentation
        }
    };
})();
*/


(function() {
    return {
        // Add an extra div to the layout.
        // prototype.createUI is called to make sure
        // that the autogenerated elements are added too.
        createUI: function(namingContainerPrefix, container, settings) {
            
            this.prototype.createUI.apply(this, arguments);
            var element = dojo.create('div', { id: namingContainer + 'MyDiv' });
            element.innerHTML = "This is MyDiv";
            dojo.place(element, container);
        },

        // Add a validation error message if the value of MyInt is > 1000.
        // prototype.validate is called so that that we don't hide errors
        // added by the default validators.
        // See also Client Side Validation to see how you can provide
        // localized strings - like error messages.
        validate: function(namingContainer) {
            var validationErrors = this.prototype.validate.apply(this, arguments);
            var myIntWidget = dijit.byId(namingContainer + 'MyInt');
            if (myIntWidget.value > 1000) {
                validationErrors.Add('Error!', myIntWidget.domNode.id);
            }
            return validationErrors;
        },

        // Multiply the value of MyInt by 10 before saving.
        getSettings: function(namingContainer) {
            var myIntValue = dijit.byId(namingContainer + 'MyInt').value;
            // Attach eventhandler for onmouseover.
            // The settings parameter passed to the function contains
            // the model properties and values. It is not used in this
            // example but you could, for example, retrieve the current
            // value of MyInt via settings.MyInt.
            uiCreated: function(namingContainer, setting) {
                var myIntWidget = dojo.byId(namingContainer + 'MyInt');
                dojo.connect(myIntWidget, 'onmouseover', null,
                    function() { alert('You hovered over the MyInt field.'); });
            }
        }
    }
})();