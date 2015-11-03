$(document).ready(function() {
  
    $( "#startdate,#enddate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        firstDay: 1,
        dateFormat: 'dd/mm/yy',
    })

    $( "#startdate" ).datepicker({ dateFormat: 'dd-mm-yy' });
    $( "#enddate" ).datepicker({ dateFormat: 'dd-mm-yy' });

    
        var start = $('#startdate').datepicker('getDate');
        var end   = $('#enddate').datepicker('getDate');

        if (start<end) {
            var days   = (end - start)/1000/60/60/24;
        }
        else {
            alert ("Your food is already expired, it is to late!");
            $('#startdate').val("");
            $('#enddate').val("");
            $('#days').val("");
        }
    

    
    
    $("#Submit").click(function(){ 
        var Name = $("#Name").val();
        var Description = $("#Description").val();
	   days = (end - start)/1000/60/60/24;
        //If expired
        if(days <= 3){
		$("#Table").append('<tr style = "background-color: red"><td>' + Name + '</td><td>' + Description + '</td><td>' + days + '</td></tr>');   
	   }
	   //If not expired 
	   else{
		  $("#Table").append('<tr><td>' + Name + '</td><td>' + Description + '</td></tr>'); 
	   } 
    });
}); //end ready