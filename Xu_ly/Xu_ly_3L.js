// var Dia_chi_Dich_vu = `http://localhost:1000`;
// var Dia_chi_Media = `http://localhost:1001`;

var Dia_chi_Dich_vu = `https://ban-game-dvdl.herokuapp.com`;
var Dia_chi_Media = `https://ban-game-media.herokuapp.com`;


function Doc_Danh_sach_Game(The_loai_Game){
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Game_${The_loai_Game}`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open(`POST`, Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send(``);
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if(Chuoi_JSON != ``)
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
}

//tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

//slideshow GAME HOT
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//slideshow GAME MOI
var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

