// var Dia_chi_Dich_vu = `http://localhost:1000`;
// var Dia_chi_Media = `http://localhost:1001`;

var Dia_chi_Dich_vu = `https://ban-game-dvdl.herokuapp.com`;
var Dia_chi_Media = `https://ban-game-media.herokuapp.com`;


function Doc_Danh_sach_Game(The_loai_Game) {
  var Du_lieu = {}
  var Xu_ly_HTTP = new XMLHttpRequest();
  var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Game_${The_loai_Game}`;
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
  Xu_ly_HTTP.open(`POST`, Dia_chi_Xu_ly, false);
  Xu_ly_HTTP.send(``);
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if (Chuoi_JSON != ``)
    Du_lieu = JSON.parse(Chuoi_JSON);
  return Du_lieu;
}


function Load_San_Pham(Game, Th_Cha) {
    var the_hien = document.createElement(`div`);
    the_hien.setAttribute("data", JSON.stringify(Game))
    Th_Cha.appendChild(the_hien);
    var Chuoi_HTML = ` <div class="card m-4" style="width: 18rem;float:left">
                <img class="card-img-top" src="${Dia_chi_Media}/${Game.Ma_so}.png" height="155px" width="395px" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${Game.Ten}</h5>
                  <p class="card-text">Mã game: ${Game.Ma_so}</p>
                  <p class="card-text">Nhà sản xuất: ${Game.Nha_San_xuat}</p>
                  <p class="card-text">Giá: ${Game.Don_gia_ban}</p>
                  <a href="#" class="btn btn-primary">Mua</a>
                  <button class="btn btn-sm btn-danger ml-5">Xem chi tiết</button>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#room">
                      Đánh giá
                  </button>
                  <div class="modal" id="room">
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <form method="POST" id="create">

                                  <!-- Modal Header -->
                                  <div class="modal-header text-center">
                                      <h4 class="modal-title w-100">Đánh giá</h4>
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                                  </div>
                                  <!-- Modal body -->
                                  <div class="modal-body">
                                      <div class="body-icon">
                                          <span style="margin: 20px">
                                                  <input class="input-zoom" type="radio" id="zoomCheck1" name="checkImage">
                                                  <label for="zoomCheck1">
                                                      <img class="css-square" src="images/1.png" name="imageid" width="100px" height="100px" id="1" onclick="sendHinh(this)">
                                                  </label>

                                              </span>
                                          <span style="margin: 20px">
                                                  <input class="input-zoom" type="radio" id="zoomCheck2" name="checkImage">
                                                  <label for="zoomCheck2">
                                                      <img class="css-square" src="images/2.png" name="imageid" width="100px" height="100px" id="2" onclick="sendHinh(this)">
                                                  </label>

                                              </span>
                                          <span style="margin: 20px">
                                                  <input class="input-zoom" type="radio" id="zoomCheck3" name="checkImage">
                                                  <label for="zoomCheck3">
                                                      <img class="css-square" src="images/3.png" name="imageid" width="100px" height="100px" id="3" onclick="sendHinh(this)">
                                                  </label>

                                              </span>

                                      </div>
                                      <textarea name="y_kien" style="height: 100px; width: 100%" placeholder="Ý kiến khác..."></textarea>
                                  </div>

                                  <!-- Modal footer -->
                                  <div class="modal-footer">
                                      <button role="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
                                      <input  value="Hoàn tất" class="btn btn-success"
                                            type="submit" name="submit" id="success" data-dismiss="modal" >
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>

                  <div class="modal" id="open-success" >
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <!-- Modal body -->
                              <div class="modal-body">
                                  <div class="body-icon">
                                              <span style="margin: 20px">
                                                  <img src="" class="showImgage" id="imageShow" width="100px" height="100px">
                                                  <p style="font-weight: bold; margin-top: 20px">CẢM ƠN BẠN ĐÃ THỰC HIỆN ĐÁNH GIÁ</p>
                                                  <div style="position: relative">
                                                      <img src="images/load.gif" width="50px" height="50px">
                                                      <div id="countDown" style="position: absolute;top: 25%;width: 100%;"></div>
                                                  </div>
                                              </span>
                                  </div>
                              </div>

                              <!-- Modal footer -->
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-success" data-dismiss="modal" id="xong">Xong</button>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="modal" id="cancel-success" >
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <!-- Modal body -->
                              <div class="modal-body">
                                  <div class="body-icon">
                                              <span style="margin: 20px">
                                                  <img src="images/load.gif" class="showImgage"  width="100px" height="100px">
                                                  <p style="font-weight: bold; margin-top: 20px">BẠN CHƯA ĐÁNH GIÁ!!!</p>

                                              </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>`;
    the_hien.innerHTML = Chuoi_HTML;
    return the_hien;
  }

function Ghi_Game_Moi(Game, The_loai_Game) {
  var Du_lieu = {}
  var Xu_ly_HTTP = new XMLHttpRequest();
  var Tham_so = `Ma_so_Xu_ly=Ghi_Game_${The_loai_Game}_Moi`;
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
  var Chuoi_gui = JSON.stringify(Game);
  Xu_ly_HTTP.send(Chuoi_gui);
  var Kq = Xu_ly_HTTP.responseText;
  console.log(Kq);
  if (Kq != "")
    Du_lieu = JSON.parse(Kq);
  return Du_lieu;
}

function Login(Tai_khoan) {
  var Xu_ly_HTTP = new XMLHttpRequest();
  var Tham_so = `Ma_so_Xu_ly=login`;
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
  var Chuoi_gui = JSON.stringify(Tai_khoan);
  Xu_ly_HTTP.send(Chuoi_gui);
  var Kq = Xu_ly_HTTP.responseText;
  if (Kq != "")
    return Kq;
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

function Tao_Ma_so_Moi_Theo_loai(Danh_sach_Game_Theo_Loai, The_loai_Game) {
  var Danh_sach_Ma_so = [];
  Danh_sach_Game_Theo_Loai.forEach(game => {
    if (game.The_loai == The_loai_Game) {
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
$(document).ready(function () {
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
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
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
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // x[slideIndex-1].style.display = "block";  
}