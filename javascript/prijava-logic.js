$(document).ready(function () {

    var checkAler = false;
    $("#submit").click(function(){
        if($("#ime").val() && $("#prezime").val() && $("#brtel").val() && $("#email").val()){
            if($("#slikanje").prop("checked",false) && $("#vajanje").prop("checked",false)){
                checkAler = true;
                alert("Izaberite barem jedan od ponudjenih kurseva!");
            }else if($("#osnovni").prop("checked",false)  && $("#srednji").prop("checked",false) && $("#napredni").prop("checked",false)){
                checkAler = true;
                alert("Izaberite barem jedan od ponudjenih nivoa kurseva!");
            }
        }
    
        
    });

    //kako sacuvati formu?
    $("#prijava").submit(function(event){
        if(checkAler){
            loadAjax();
            event.preventDefault()
        }
       
     })
    function validatePhone(phonenumber) {
    	var rephonenumber = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-|\ ?))[2-9]\d{2}-\d{4}$/;
    	return rephonenumber.test(phonenumber);
	}
	
    function validateForm(){
		// Validate Phone
		if (validatePhone( $("#phone").val())) {
			return true;
		} else {
			alert("Please enter a valid phone number, format ###-###-####");
			return false;
		}
	}
    var suma = 0;
    
    var slikarstvo = 10000;
    var vajarstvo = 15000;

    

    var o = 3000;
    var s = 6000;
    var n = 9000;

    var p1 = false;
    var p2 = false;
    var kurs;

    $("#slikanje").click(function(){
        if($('#slikanje').prop("checked", true)){
            if(p2==true){
                suma = suma - vajarstvo;
            }
            if(p1!=true){
                suma = suma + slikarstvo;
            }
            p1 = true;
            p2 = false;
            kurs = "slikarstvo";
        }
        update();
    });

    $("#vajanje").click(function(){
        if($('#vajanje').prop("checked", true)){
            if(p1==true){
                suma = suma - slikarstvo;
            }
            if(p2!=true){
                suma = suma + vajarstvo;
            }
            p2 = true;
            p1 = false;
            kurs = "vajarstvo";
        }
        update();
    });

    var c1 = false;
    var c2 = false;
    var c3 = false;

    $("#osnovni").click(function(){
        if($('#osnovni').prop("checked", true)){
            if(c2==true){
                suma = suma - s;
            }
            if(c3==true){
                suma = suma - n;
            }
            if(c1!=true){
                suma = suma + o;
            }
            c1 = true;
            c2 = false;
            c3 = false;
        }
       
        update();
    });


    $("#srednji").click(function(){
        if($('#srednji').prop("checked", true)){
            if(c1==true){
                suma = suma - o;
            }
            if(c3==true){
                suma = suma - n;
            }
            if(c2!=true){
                suma = suma + s;
            }
            c2 = true;
            c1 = false;
            c3 = false;
        }
       
        
        update();
    });

    $("#napredni").click(function(){
        if($('#napredni').prop("checked", true)){
            if(c1==true){
                suma = suma - o;
            }
            if(c2==true){
                suma = suma - s;
            }
            if(c3!=true){
                suma = suma + n;
            }
            c3 = true;
            c1 = false;
            c2 = false;
        }
        
        update();
    });


    update=function(){
        $("#sum").text("Suma: " + suma + "RSD");
    };
});