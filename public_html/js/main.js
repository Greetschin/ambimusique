function apiCall(url, success, error){
	$.ajax({
		url : 'http://192.168.43.233:8080/'+url,
		type : 'GET',
		dataType : 'json',
		success : success,
		error : error,
		timeout: 1000
	});
}

$(document).ready(function(){

	apiCall('info',
	function(json,success){
		$('#musicTitle').html(json.musicTitle);
		$('#musicStatus').removeClass('playing pause stop').addClass(json.musicStatus);
	},
	function(result, status, error){
		console.log(result);
		console.log(status);
		console.log(error);
	});


	//Playlist
	apiCall('musics',
	function(json, statut){
		var root = $('#playlist'),
			liClass = root.attr('data-listeClass'),
			result = "";
		json.map(function(a){

			result += '<li class="'+liClass+'">'+a+'</li>';
		});
		root.append(result).listview();
	},
	function(resultat, statut, erreur){
		var root = $('#playlist'),
		liClass = root.attr('data-listeClass'),
		result = '<li class="'+liClass+'">Aucune musique</li>';
		root.append(result).listview();
	});
});
