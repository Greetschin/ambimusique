/**
 * Created by hugo on 06/04/2017.
 */
$(function(){

    var AlertLike = new cAlert("Oh! you enjoyed it ", "success", 2)
    var AlertDislike = new cAlert("you don't like it .skipping...", "danger", 2)
   $(document).on("swipeleft",".music_played",function(){
        console.log("left swiped")
       AlertDislike.alert()
    })
    $(document).on("swiperight",".music_played",function(){
        console.log("rigth swiped")

        AlertLike.alert()
    })
})