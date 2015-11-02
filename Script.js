$(document).ready(function() {
  
    $( "#startdate,#enddate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        firstDay: 1,
        dateFormat: 'dd/mm/yy',
    })

    $( "#startdate" ).datepicker({ dateFormat: 'dd-mm-yy' });
    $( "#enddate" ).datepicker({ dateFormat: 'dd-mm-yy' });

    $('#enddate').change(function() {
        var start = $('#startdate').datepicker('getDate');
        var end   = $('#enddate').datepicker('getDate');

        if (start<end) {
            var days   = (end - start)/1000/60/60/24;
            $('#days').val(days);
        }
        else {
            alert ("Your food is already expired, it is to late!");
            $('#startdate').val("");
            $('#enddate').val("");
            $('#days').val("");
        }
    }); //end change function

    
    
    $("#Submit").click(function(){
        var Name = $("#Name").val();
        var Description = $("#Description").val();
        
        $("#Table").html("<tr><td>" + Name + "</td><td>" + Description + "</td><td>" + days + "</td></tr>");
        
        if(days <= 3){
            
        }
    });
}); //end ready