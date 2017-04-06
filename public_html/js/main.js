function Lecture() {

}

console.log('toto');

$(document).ready(function(){

	/*$.ajax({
		url : 'http://192.168.43.233:8080/info', // La ressource ciblée
		type : 'GET', // Le type de la requête HTTP.
		dataType : 'json',
		success : function(json, statut){ // success est toujours en place, bien sûr !
			console.log(json);
			console.log(statut);
		},
		error : function(resultat, statut, erreur){
			console.log(resultat);
			console.log(statut);
			console.log(erreur);
		}
	});*/

	//Playlist
	$.ajax({
		url : 'http://192.168.43.233:8080/musics',
		type : 'GET',
		dataType : 'json',
		success : function(json, statut){
			var root = $('#playlist'),
				liClass = root.attr('data-listeClass'),
				result = "";
			json.map(function(a){

				result += '<li class="'+liClass+'">'+a+'</li>';

				//console.log(a);
			});
			root.append(result).listview();
		},
		error : function(resultat, statut, erreur){
			console.log(erreur);
		}
	});
});
