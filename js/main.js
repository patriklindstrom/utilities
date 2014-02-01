function Log2Soap(logtxt){

return logtxt.toLowerCase();
}



$( document ).ready(function() {
    console.log( "ready!" );
    $("#LogTxt").val("ARE YOU ALIVE")
    $("#SoapMsg").val("Could I be dead?");
   $( "#do-transform" ).click(function() {
    console.log( "Commence Transform was clicked" );
    $("#SoapMsg").val(Log2Soap( $("#LogTxt").val()));
});


});
