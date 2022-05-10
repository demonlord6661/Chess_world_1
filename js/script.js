$(document).ready(function(){

    var selection = {piece:'',player:'',column:''},
    playerturn = 'white'

    $("[piece]").each(function(){
        let player = $(this).attr('player'),
        piece = $(this).attr('piece'),
        boardsquarecolor = $(this).css('background-color')
        if(place == '' || player == ''){
            $(this).attr('empty', 'true')
            $(this).removeAttr('player').removeAttr('piece')
            return
        }
            $(this).attr('empty', 'false')
            $(this).css("background", "url(pieces/"+player+"/"+piece+".png").css("background-size","6.25rem 6.25rem").css('background-color', boardsquarecolor)
        })
        