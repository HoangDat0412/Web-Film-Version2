<script setup>
import router from '@/router';
import { useFilmStore } from '@/stores/film';


const film = useFilmStore()
const handleSearch = async (type)=>{
  console.log(type);
   await film.searchFilm({
    name:type
  })
  router.push({path:"/search"})
}
</script>

<template>
  <main>
    <hr>
    <div className='footer' >
      <div className='container-fluid'>
        <div className="row mt-5" style="gap: 20px;">
          <!-- <div className="col-12">
            <RouterLink to="/" >
          <img width="100px" src="../../assets/logofilm.png" alt="">
        </RouterLink>
          </div> -->
          <div className=' col-12 '>
            <div className="row" style="font-size: 15px;">
              <div className="col-12 col-sm-4 mt-4 mt-sm-0  d-flex justify-content-center">
                <div>
                  <h5 class="">Phim Mới</h5>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Khoa Học`)">
                    Phim Khoa Học</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Kinh Dị`)">Phim Kinh Dị</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Chiếu Rạp`)">Phim Chiếu Rạp</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Hình Sự`)">Phim Hình Sự</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Hành Động`)">Phim Hành Động</button>
                </div>
              </div>
              <div className="col-12 col-sm-4 mt-4 mt-sm-0  d-flex justify-content-center">
                <div>
                  <h5>Phim Hay</h5>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Âu Mỹ`)">Phim Âu Mỹ</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Hàn Quốc`)">Phim Hàn Quốc</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Trung Quốc`)">Phim Trung Quốc</button>
                  <button class="btn d-block text-light" @click="()=> handleSearch(`Nhật Bản`)">Phim Nhật Bản</button>
                </div>
              </div>

              <div className="col-12 col-sm-4 mt-4 mt-sm-0  d-flex justify-content-center">
                <div> <h5>Thông Tin</h5>
                  <p><a href="mailto:hoang2011dat@gmail.com">Liên Hệ: hoang2011dat@gmail.com</a></p>
                  <p>Giới Thiệu</p>
                  <p>Điều Khoản</p>
                  <p>Riêng Tư</p>
                  <p>Bản Quyền</p></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>


<style scoped>
</style>
