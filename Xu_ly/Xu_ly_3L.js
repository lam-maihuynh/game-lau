var Dia_chi_Dich_vu = `http://localhost:1000`;
var Dia_chi_Media = `http://localhost:1001`;

// var Dia_chi_Dich_vu = `https://ban-game-dvdl.herokuapp.com`;
// var Dia_chi_Media = `https://ban-game-media.herokuapp.com`;


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

function Load_San_Pham(Danh_sach_Game, Th_Cha){
  Danh_sach_Game.forEach(game => {
    var the_hien = document.createElement(`div`);
    Th_Cha.appendChild(the_hien);
    var Chuoi_HTML = ` <div class="card ml-5" style="width: 18rem;float:left">
                <img class="card-img-top" src="${Dia_chi_Media}/${game.Ma_so}.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${game.Ten}</h5>
                  <p class="card-text">Mã game: ${game.Ma_so}</p>
                  <p class="card-text">Nhà sản xuất: ${game.Nha_San_xuat}</p>
                  <p class="card-text">Giá: ${game.Don_gia_ban}</p>
                  <a href="#" class="btn btn-primary">Mua</a>
                </div>
              </div>`;
    the_hien.innerHTML=Chuoi_HTML;
  });
}

function Ghi_Game_Moi(Game, The_loai_Game){
  var Du_lieu = {}
  var Xu_ly_HTTP = new XMLHttpRequest();
  var Tham_so = `Ma_so_Xu_ly=Ghi_Game_${The_loai_Game}_Moi`;
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
  var Chuoi_gui = JSON.stringify(Game);
  Xu_ly_HTTP.send(Chuoi_gui);
  var Kq = Xu_ly_HTTP.responseText;
  console.log(Kq);
  if(Kq != "")
    Du_lieu = JSON.parse(Kq);
  return Du_lieu;
}

function Ghi_Media(Hinh) {
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Dia_chi_Xu_ly = `${Dia_chi_Media}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    var Chuoi_gui = JSON.stringify(Hinh);
    Xu_ly_HTTP.send(Chuoi_gui);
    var Kq = Xu_ly_HTTP.responseText;
    return Kq;
}

function Tao_Ma_so_Moi_Theo_loai(Danh_sach_Game_Theo_Loai, The_loai_Game){
  var Danh_sach_Ma_so = [];
  Danh_sach_Game_Theo_Loai.forEach(game => {
    if(game.The_loai == The_loai_Game){
      var Thanh_phan_con = game.Ma_so.trim().split("_");
      Danh_sach_Ma_so.push(parseInt(Thanh_phan_con[1]));
    }
  })

  Danh_sach_Ma_so.sort((a, b) => {
    return a - b;
  })

  var Ma_so_Sau_cung = Danh_sach_Ma_so[Danh_sach_Ma_so.length - 1];
      Ma_so_Sau_cung += 1;
  Th_Ma_so.value = The_loai_Game + "_" + Ma_so_Sau_cung.toString();
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
  // x[slideIndex-1].style.display = "block";  
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
  // x[slideIndex-1].style.display = "block";  
}

