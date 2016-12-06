$('#all').click(function () {
    if ($(this).text().indexOf('Show') >= 0) {
        $('.panel-collapse').collapse('show');
        $(this).text('Hide All');
    } else {
        $('.panel-collapse').collapse('hide');
        $(this).text('Show All');
    }
});