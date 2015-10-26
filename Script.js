// Variables

var FoodName;

var Description;

var ShelfLife;

// Jquery code
$(document).ready(function(){
    var foodname = $("myForm").getElementsByName('foodName');
    $("FoodTable").append(foodname);
});