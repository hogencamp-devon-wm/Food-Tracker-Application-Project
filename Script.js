// Jquery code
$(document).ready(function(){
    // Variables
    var FoodName;

    var Description;

    var ShelfLife;    
    
    $("#Submit").click(function() {
        
        ShelfLife = $("#Date").val();
        
        $("#Paragraph").html(ShelfLife);
        
    });
    
});