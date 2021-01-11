$.getJSON('shalat.json', function(data) {
    $.each(data, function(i, data) {
        $('#list').append('<td>' + data.tanggal + '</td>');
    });
});