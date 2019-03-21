var Du_lieu = Doc_Danh_sach_Game(`Phieu_luu`);
        var Danh_sach_Game_Phieu_luu = Du_lieu.Danh_sach_Game_Phieu_luu
        Load_San_Pham(Danh_sach_Game_Phieu_luu);


        function Load_San_Pham(Danh_sach_Game){
            Danh_sach_Game.forEach(game => {
              var the_hien = document.createElement(`div`);
              Th_Cha_Adventure.appendChild(the_hien);
              var Chuoi_HTML = ` <div class="card ml-5 card-info">
                          <img class="card-img-top" src="${Dia_chi_Media}/${game.Ma_so}.png" alt="Card image cap">
                          <div class="card-body">
                            <h4 class="card-title"><b> ${game.Ten} </b></h4>
                            <p class="card-text">Mã game: ${game.Ma_so}</p>
                            <p class="card-text">Nhà sản xuất: ${game.Nha_San_xuat}</p>
                            <p class="card-text">Giá: ${game.Don_gia_ban}</p>
                            <a href="#" class="btn btn-info">Chi tiết</a>
                            <a href="#" class="btn btn-primary">Mua</a>
                            <a href="#" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="Cho vào vỏ hàng"><i class="fa fa-shopping-cart"></i></a>
                          </div>
                        </div>`;
              the_hien.innerHTML=Chuoi_HTML;
            });
        }