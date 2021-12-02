$(document).ready(function () {
    var btn1;
    var btn2;

    $(".buttonS").click(function () {
        btn1 = true;
        console.log(btn2);
        if (btn2) {
            $(".t2").hide();
            $(".buttonV").css("background-color", "rgb(255, 216, 209)");
        }
        $(".t1").show("slow");
        $(".buttonS").css("background-color", "rgb(255, 146, 165)");
        console.log("Usao");
    });

    $(".buttonV").click(function () {
        btn2 = true;
        if (btn2) {
            $(".buttonS").css("background-color", "rgb(255, 216, 209)");
            $(".t1").hide();
        }
        $(".t2").show("slow");
        $(".buttonV").css("background-color", "rgb(255, 146, 165)");
    });

    var s;
    var v;
    $(".V").click(function () {
        v = true;
        if (s == true) {
            $("#slikarstvo").hide();
        }
        $("#vajarstvo").show("slow");

    });

    $(".S").click(function () {
        s = true;
        if (v == true) {
            $("#vajarstvo").hide();
        }
        $("#slikarstvo").show("slow");
    });

});