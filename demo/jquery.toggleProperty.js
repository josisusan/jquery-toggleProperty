// inspired from http://stackoverflow.com/questions/4702000/toggle-input-disabled-attribute-using-jquery
(function($){
  $.fn.toggleProperty = function(property){

    return this.each( function() {
      element_dom = $(this);
      element_dom.prop(property, !element_dom.prop(property));
    });

  }
}(jQuery));