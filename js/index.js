$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $('ul.tabs1 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs1 li').removeClass('current1');
        $('.tab1-content').removeClass('current1');

        $(this).addClass('current1');
        $("#" + tab_id).addClass('current1');
    });


    $('ul.tabs2 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs2 li').removeClass('current2');
        $('.tab2-content').removeClass('current2');

        $(this).addClass('current2');
        $("#" + tab_id).addClass('current2');
    });


    $('ul.tabs3 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs3 li').removeClass('current3');
        $('.tab3-content').removeClass('current3');

        $(this).addClass('current3');
        $("#" + tab_id).addClass('current3');
    });


})
