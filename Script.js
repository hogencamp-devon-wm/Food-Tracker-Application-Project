// Jquery code
$(document).ready(function(){
    // Variables
    
    var FoodName;

    var Description;

    var ShelfLife;
    
    var Today = new Date();
    
    var CurrentDate = Date.parse(Today);
    
    var Experation;
    
    var FoodExperation = Date.parse(ShelfLife);
    
    $("#Submit").click(function() {
        
        ShelfLife = $("#Date").val();
        
        $("#Paragraph").html(ShelfLife);
        
    });
    if()
});
    
    
    
 //Try this code   
    
/*

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2008,01,12);
var secondDate = new Date(2008,01,22);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
*/