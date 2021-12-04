$(document).ready(function () {

    var p1 = false;
    var p2 = false;


    var c1 = false;
    var c2 = false;
    var c3 = false;

    var checkAler = false;
    $("#submit").click(function () {
        if ($("#ime").val() && $("#prezime").val()) {
            if (checkEmail($("#email").val()) != true) {
                alert("Uneli ste neispravan e-mail!");
            } else if (checkPhone($("#brtel").val()) != true) {
                alert("Uneli ste neispravan broj telefona!");
            } else if ($("#slikanje").prop("checked") == false && $("#vajanje").prop("checked") == false) {
                alert("Izaberite barem jedan od ponudjenih kurseva!");
            } else if ($("#osnovni").prop("checked") == false && $("#srednji").prop("checked") == false && $("#napredni").prop("checked") == false) {
                alert("Izaberite barem jedan od ponudjenih nivoa kurseva!");
            } else {


                ime = document.getElementById("ime").value;
                prezime = document.getElementById("prezime").value;
                brtel = document.getElementById("brtel").value;
                email = document.getElementById("email").value;

                var vrsta_kursa;
                kurs = document.getElementById("slikanje").value;
                if (kurs) {
                    vrsta_kursa = "slikarstva";
                } else {
                    vrsta_kursa = "vajarstva";
                }

                os = document.getElementById("osnovni").value;
                sr = document.getElementById("srednji").value;
                var nivo;

                if (os) {
                    nivo = "osnovni";
                } else if (sr) {
                    nivo = "srednji";
                } else {
                    nivo = "napredni";
                }

                confirm("Provera podataka:\nKorisnik:" + ime + " " + prezime + "\nBroj telefona: " + brtel + "\nEmail: " + email + "\nPrijavljuje se za kurs iz: " + vrsta_kursa + ", nivo kursa: " + nivo);
             
            }


        }


    });

    checkPhone = function (phone) {
        var PhoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return PhoneRegex.test(phone);
    }

    checkEmail = function (email) {
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return EmailRegex.test(email);
    }

    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output =
        (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();

    $("#datum").text("Datum prijave: " + output);




    var suma = 0;

    var slikarstvo = 10000;
    var vajarstvo = 15000;



    var o = 3000;
    var s = 6000;
    var n = 9000;


    var kurs;

    $("#slikanje").click(function () {
        if ($('#slikanje').prop("checked", true)) {
            if (p2 == true) {
                suma = suma - vajarstvo;
            }
            if (p1 != true) {
                suma = suma + slikarstvo;
            }
            p1 = true;
            p2 = false;
            // kurs.vrsta_kursa = "slikarstvo";
        }
        update();
    });

    $("#vajanje").click(function () {
        if ($('#vajanje').prop("checked", true)) {
            if (p1 == true) {
                suma = suma - slikarstvo;
            }
            if (p2 != true) {
                suma = suma + vajarstvo;
            }
            p2 = true;
            p1 = false;
            //  kurs.vrsta_kursa = "vajarstvo";
        }
        update();
    });



    $("#osnovni").click(function () {
        if ($('#osnovni').prop("checked", true)) {
            if (c2 == true) {
                suma = suma - s;
            }
            if (c3 == true) {
                suma = suma - n;
            }
            if (c1 != true) {
                suma = suma + o;
            }
            c1 = true;
            c2 = false;
            c3 = false;
            // kurs.nivo = "osnovni";
        }

        update();
    });


    $("#srednji").click(function () {
        if ($('#srednji').prop("checked", true)) {
            if (c1 == true) {
                suma = suma - o;
            }
            if (c3 == true) {
                suma = suma - n;
            }
            if (c2 != true) {
                suma = suma + s;
            }
            c2 = true;
            c1 = false;
            c3 = false;
            // kurs.nivo = "srednji";
        }


        update();
    });

    $("#napredni").click(function () {
        if ($('#napredni').prop("checked", true)) {
            if (c1 == true) {
                suma = suma - o;
            }
            if (c2 == true) {
                suma = suma - s;
            }
            if (c3 != true) {
                suma = suma + n;
            }
            c3 = true;
            c1 = false;
            c2 = false;
            //  kurs.nivo = "napredni";
        }

        update();
    });





    update = function () {
        $("#sum").text("Suma: " + suma + "RSD");
    };
});