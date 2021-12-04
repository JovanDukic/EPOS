$(document).ready(function(){

    var p;
    var s;
    var n;

    $("#p").click(function(){
        p = true;
        if(s==true){
            $("#tabs-2").hide();
        }
        if(n==true){
            $("#tabs-3").hide();
        }
      $("#tabs-1").show("slow");
    });

    $("#s").click(function(){
        s = true;
        if(p==true){
            $("#tabs-1").hide();
        }
        if(n==true){
            $("#tabs-3").hide();
        }
      $("#tabs-2").show("slow");
    });

    $("#n").click(function(){
        n = true;
        if(p==true){
            $("#tabs-1").hide();
        }
        if(s==true){
            $("#tabs-2").hide();
        }
      $("#tabs-3").show("slow");
    });
});
