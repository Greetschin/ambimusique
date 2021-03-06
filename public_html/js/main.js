function apiCall(url, success, error) {
    $.ajax({
        url: 'http://192.168.43.233:8080/' + url,
        type: 'GET',
        dataType: 'json',
        success: success,
        error: error,
        timeout: 1000
    });
}
$(document).ready(function(){

	apiCall('info',
	function(json,success){
		$('#musicImage').attr("src","192.168.43.233/img/"+ json.musicTitle.replace(".mp3",".png"));
		$('#musicTitle').html(json.musicTitle);
		$('#musicStatus').removeClass('playing paused stopped').addClass(json.musicStatus);
	},
	function(result, status, error){
		console.log('error');
	});


    //Playlist
    apiCall('musics',
            function (json, statut) {
                var root = $('#playlist'),
                        liClass = root.attr('data-listeClass'),
                        result = "";
                json.map(function (a) {

                    result += '<li class="' + liClass + '"onclick="playlist(' + "'" + a + "'" + ')" >' + a + '</li>';
                });
                root.append(result).listview();
            },
            function (resultat, statut, erreur) {
                var root = $('#playlist'),
                        liClass = root.attr('data-listeClass'),
                        result = '<li class="' + liClass + '">Aucune musique</li>';
                root.append(result).listview();
            });
});
function before() {
    apiCall('previous', function (json, success) {
        $('#musicImage').attr("src","192.168.43.233/img/"+ json.musicTitle.replace(".mp3",".png"))
        $('#musicTitle').html(json.musicTitle);
        $('#musicStatus').removeClass('stopped playing paused').addClass(json.musicStatus);

    });
}
function playing() {
    apiCall('toggle', function (json, success) {
        $('#musicTitle').html(json.musicTitle);
        $('#musicStatus').removeClass('stopped playing paused').addClass(json.musicStatus);
        $('#musicImage').attr("src","192.168.43.233/img/"+ json.musicTitle.replace(".mp3",".png"))
    });
}
function next() {
    apiCall("next", function (json, success) {
        $('#musicTitle').html(json.musicTitle);
        $('#musicStatus').removeClass('stopped playing paused').addClass(json.musicStatus);
        $('#musicImage').attr("src","192.168.43.233/img/"+ json.musicTitle.replace(".mp3",".png"))
    });
}
function playlist(prmSelect) {
    apiCall("select" + '?music=' + prmSelect, function (json, success)  {
        $('#musicTitle').html(json.musicTitle);
        $('#musicStatus').removeClass('stopped playing paused').addClass(json.musicStatus);
        $('#musicImage').attr("src","192.168.43.233/img/"+ json.musicTitle.replace(".mp3",".png"))
    });
}
