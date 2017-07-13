'use strict';

$(function () {

    $("body").append('<div id="dane-programisty"></div>');

    $('#pobierz-dane').click(function () {

        $.getJSON('http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', function (data) {

        $("#dane-programisty").append('<p class="text-danger">Imię użytkownika: ' + data.imie + '</p>');
        $("#dane-programisty").append('<p class="text-danger">Nazwisko użytkownika: ' + data.nazwisko + '</p>');
        $("#dane-programisty").append('<p class="text-danger">Zawód użytkownika: ' + data.zawod + '</p>');
        $("#dane-programisty").append('<p class="text-danger">Firma użytkownika: ' + data.firma + '</p>');
            
        $('p').addClass("bg-warning");
        });
    });



});