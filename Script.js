

// Jquery code
$(document).ready(function(){
    // Variables
    var FoodName;

    var Description;

    var ShelfLife;    
    
    $("#Submit").click(function() {
        
        FoodName = $("#FoodName").val();
        
        $("#Paragraph").html(FoodName);
        
    });
    
});