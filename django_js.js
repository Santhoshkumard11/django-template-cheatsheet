HTMLElement.prototype.serialize = function(){
    var obj = {};
    var elements = this.querySelectorAll( "input, select, textarea" );
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if( name ) {
            obj[ name ] = value;
        }
    }
    return obj;
}

var dataToSend = document.querySelector("form").serialize();
//you will get the dict of all the inputs


$(function() {
    //execute something only when the document is ready
});

//get all the radio checked inputs

//get the length of the checked radio buttons
$('input:radio:checked').length;

//get the specific selected row
var row = $(this).closest("tr");

//will give you the text inside the td
var foo = $(row).find("td.classname").text();
