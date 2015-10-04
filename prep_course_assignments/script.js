$(document).ready( function() {
	//Allow the item to be checked off the list while hovering over
	//the span (which includes the check box and the item description)
	//This is trickier than it first appears because of the interaction
	//between the html input check box element and the jQuery methods
	//
	//The span is separated into two elements, input and label.
	//If the cursor is clicked over the input element, then the :checkbox 
	//property is updated to true without using any jQuery methods
	//If the cursor is clicked over the label, then toggle the :checkbox
	//property using jQuery
	//Style the span's text based on the :checkbox state.
	$('form span').hover( function() {
		var checkBox = $(this).find(":checkbox")[0];
        
        $('label').click( function () {    
        $(checkBox).prop("checked") ?
          $(checkBox).prop("checked", false) :
          $(checkBox).prop("checked", true); 
        });
        
        $(this).click( function() {
	    	if($(checkBox).prop("checked")) {
                $(this).css("text-decoration", "line-through");
                $(this).css("color", "red"); 
                $(this).css("font-style", "oblique"); 
            } else {	
                $(this).css("text-decoration", "");
                $(this).css("color", "");
                $(this).css("font-style", "");
            };
        });
    });

 //   $('#directions').accordion({collapsible: true, active: false});

 
});

$(document).ready( function() {   
	$('#instructions').accordion({collapsible: true, active: false});

});