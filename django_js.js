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

//NOTE: if the value in the option contains space then don't use jqury
//user below
var x = document.getElementById("mySelect");
x.remove(x.selectedIndex);

//get the query string from the url
const urlParams = new URLSearchParams(window.location.search);
const foo = urlParams.get('foo'); // this will give you the value of foo

//when you want to have a button click with enter key use the code below
$("#id_of_textbox").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#id_of_button").click();
    }
});


//parse date time
 //get the current date time in 12 hr format;  hour12:false to make it 24 format
  const today = new Date(new Date().toLocaleString("en-US", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
}));

//convert a string to date object
const date_object = new Date("date string");

//scroll to the end
$("div").scrollTop(1000);

//reload the page
window.location.reload();
