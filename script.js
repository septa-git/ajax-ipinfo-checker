$(document).ready(function(){
    $('.ipinfo').click(function(){
        let token = "b70b967a1992c1";
        $.ajax({
            type: "GET",
            url: `https://ipinfo.io/json?token=${token}&callback=?`,
            dataType: "json",
            success: function(data) {
                $('.result').empty();
                $('.result').append(`
                    <ul class="list-group">
                        <li class="list-group-item"><strong>IP Address:</strong> ${data.ip}</li>
                        <li class="list-group-item"><strong>Hostname:</strong> ${data.hostname}</li>
                        <li class="list-group-item"><strong>City:</strong> ${data.city}</li>
                        <li class="list-group-item"><strong>Region:</strong> ${data.region}</li>
                        <li class="list-group-item"><strong>Country:</strong> ${data.country}</li>
                        <li class="list-group-item"><strong>Organization:</strong> ${data.org}</li>
                        <li class="list-group-item"><strong>Location:</strong> ${data.loc}</li>
                        <li class="list-group-item"><strong>Postal Code:</strong> ${data.postal ? data.postal : 'Not Available'}</li>
                        <li class="list-group-item"><strong>Time Zone:</strong> ${data.timezone}</li>
                        <li class="list-group-item"><strong>ISP:</strong> ${data.isp}</li>
                        <li class="list-group-item"><strong>AS:</strong> ${data.as}</li>
                    </ul>
                `);
            }
        });
    });
});