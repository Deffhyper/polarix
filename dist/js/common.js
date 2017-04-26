"use strict";

$(document).ready(function(){

    $('#datepicker').datepicker({
        language: "ru",
        leftArrow: '<i class="arrow-left"></i>',
        rightArrow: '<i class="arrow-right"></i>',

        beforeShowDay: function (date){
            if (date.getMonth() == (new Date()).getMonth())
                switch (date.getDate()){
                    case 4:
                        return "red";
                    case 12:
                        return "green";
                    default :
                        return false;
                }
        },
    });

});
