$(document).ready(function () {

    var p;
    var s;
    var n;

    var flag = true;

    $(window).resize(function () {
        if ($(window).width() > 900) { // true
            if (!flag) {
                flag = true;
                $(".opis-kursa").css("flex-direction", "row");
                $(".opis-kursa").css("padding", "5%");
            }
        } else { // false
            if (flag) {
                flag = false;
                $(".opis-kursa").css("flex-direction", "column");
                $(".opis-kursa").css("padding", "7%");
            }
        }
    });

    $("#p").click(function () {
        p = true;
        if (s == true) {
            $("#tabs-2").hide();
        }
        if (n == true) {
            $("#tabs-3").hide();
        }
        $("#tabs-1").show("slow");
        $("#tabs-1").css("display", "flex");
        $(".inst_1").css("text-align", "center");
    });

    $("#s").click(function () {
        s = true;
        if (p == true) {
            $("#tabs-1").hide();
        }
        if (n == true) {
            $("#tabs-3").hide();
        }

        $("#tabs-2").show("slow");
        $("#tabs-2").css("display", "flex");
        $(".inst_2").css("text-align", "center");

    });

    $("#n").click(function () {
        n = true;
        if (p == true) {
            $("#tabs-1").hide();
        }
        if (s == true) {
            $("#tabs-2").hide();
        }
        $("#tabs-3").show("slow");
        $("#tabs-3").css("display", "flex");
        $(".inst_3").css("text-align", "center");
    });
});