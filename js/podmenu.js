$(document).ready(function () {   

    $('#nav li').hover(
        function () {
            //показать подменю
            $('ul', this).slideDown(100);  

        },
        function () {
            //скрыть подменю
            $('ul', this).slideUp(100);
        }
    );  

});