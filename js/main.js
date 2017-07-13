'use strict';

$(function () {
    console.log('hello');

    $('#pobierz-dane').click(function () {
        $.getJSON('http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', function (data) {
            $("#dane-programisty").append('<p>Imię użytkownika: ' + data.imie + '</p>');
            $("#dane-programisty").append('<p>Nazwisko użytkownika: ' + data.nazwisko + '</p>');
            $("#dane-programisty").append('<p>Zawód użytkownika: ' + data.zawod + '</p>');            
            $("#dane-programisty").append('<p>Firma użytkownika: ' + data.firma + '</p>');
        });
    });

});