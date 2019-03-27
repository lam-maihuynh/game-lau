
function sendHinh(e){
    var d = document.getElementById('imageShow');
    d.src='images/'+e.id+'.png';
}
$("#success").click(function(e){
    e.preventDefault();
    if(document.getElementById('zoomCheck1').checked==false && document.getElementById('zoomCheck2').checked==false
        && document.getElementById('zoomCheck3').checked==false) $("#cancel-success").modal();
    else $("#open-success").modal();

});