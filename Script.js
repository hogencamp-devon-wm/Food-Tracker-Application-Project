// Variables

var FoodName;

var Description;

var ShelfLife;

// Jquery code
$(document).ready(function(){
    FoodName = $("myForm").getElementsByName('FoodName');
    
    $("FoodTable").append(FoodName);
});