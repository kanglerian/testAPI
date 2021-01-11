$.getJSON('shalat.json', function(data) {
    $.each(data, function(i, data) {
        $('#list').append('<tr><td>' + data.tanggal + '</td><td>' + data.shubuh + '</td><td>' + data.dzuhur + '</td><td>' + data.magrib + '</td></tr>');
    });
});