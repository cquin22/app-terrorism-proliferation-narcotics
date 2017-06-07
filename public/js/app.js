$(document).ready(function() {
    var nm;
    $.ajax({
        type: "GET" ,
        url: "service.xml" ,
        dataType: "xml" ,
        success: xmlParser
    });


    function xmlParser(xml) {
        $(xml).find("nspEntry").each(function () {
            $('#list').append('<li class="ui-first-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+  $(this).find("firstName").text()  + ' ' + $(this).find("lastName").text() + '</a></li>')
           console.log($(this).find("firstName").text());
        });

    }
});