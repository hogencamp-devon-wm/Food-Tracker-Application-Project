function Output(){
        var name =$('#Name').val();
        var buy =$('#Start').val();
        var bad =$('#End').val();
        var desc =$('#description').val();
        var unixExpiration = Date.parse(bad);
        var today = new Date();
        var unixToday = Date.parse(today);
        if(unixToday > unixExpiration - 259200000){
            $('#Output').append('<tr style="background-color: red"><td>' + name + '</td><td>' + buy + '</td><td> ' + bad + '</td><td>'+ desc + '</td></tr>');
        }
        else {
            $('#Output').append('<tr><td>' + name + '</td><td>' + buy + '</td><td> ' + bad + '</td><td>'+ desc +'</td></tr>');
        }
    }
