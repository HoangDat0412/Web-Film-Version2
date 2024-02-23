<script setup>
import TrendingItem from '@/components/TrendingItem/TrendingItem.vue';
import { onBeforeMount,ref } from 'vue';
import { useFilmStore } from '@/stores/film';
import { useRateStore } from '@/stores/rate'
import { useRoute } from 'vue-router';
import StarRating from 'vue-star-rating'
import { LINKBE } from '@/utils/config';
const film = useFilmStore()
const rate = useRateStore()
const route = useRoute()
const imgpath = ref("")
const trailerpath = ref("")
onBeforeMount(async ()=>{
  await film.setFilmDetail(route.params.id)
  await rate.setTotalPoint(route.params.id)
  await film.setListFilm()
  let img = film.filmDetail?.img ? film.filmDetail.img : "/usr/src/app/public/film/1708399031409-transformers.jpg"
  img = img.slice(img.indexOf("/public"));
  imgpath.value = `${LINKBE}${img}`
  let trailer = film.filmDetail?.trailer ? film.filmDetail?.trailer : "/usr/src/app/public/film/1708399046429-trailernvbkt.mp4"
  trailer = trailer.slice(trailer.indexOf("/public"));
  trailerpath.value = `${LINKBE}${trailer}`

})
</script>

<template>
  <main>
    <div class="row pt-5">
      <div class="col-12 col-lg-8">
        <div class="row ">
          <div class="col-12 col-sm-5 mb-5 mb-sm-0 filmdetail_wrap " >
            <div class="banner_filmdetail ">
              <main style="height: 100%;">
                <div class="film_item">
                  <!--  -->
                  <RouterLink :to="`/watchfilm/${route.params.id}`" class="myui-vodlist__thumb" :style="{ background: 'url(' + imgpath + ')' }">
                    <span class="play hidden-xs"></span>
                    <span class="pic-tag pic-tag-top">
                      Full HD
                    </span>
                    <div class="myui-vodlist__detail">
                      <h3 class="title text-overflow pb-2 pt-2" style="background-color: #dd003f;">Xem Phim</h3>
                    </div>
                  </RouterLink>
                </div>
              </main>
            </div>
          </div>
          <div class="col-12 col-sm-7">
            <h3 style="color: #ff9658;">{{ film.filmDetail?.name }}</h3>
            <p>Trạng thái : Hoàn Thành </p>
            <p>Thể loại : 
              <span class='me-3' v-for="(i,key) in film.filmDetail?.filmType" :key="key">{{ i?.typeName }} </span>
            </p>
            <p>Năm sản xuất : {{ film.filmDetail?.yRelease }}</p>
            <p>Đạo diễn : {{ film.filmDetail?.director }}</p>
            <p>Diễn viên : 
              <span class='me-3' v-for="(i,key)  in film.filmDetail?.actor" :key="key">{{ i?.actorName }}</span>
            </p>
            <h3>Rating (lượt đánh giá : {{ rate?.numberRate }}) </h3>
            <StarRating :rating="rate.totalPoint" :read-only="true" :increment="0.01" />
          </div>

          <div class="mt-5">
            <h3 style="color: #ff9658;">Nội Dung Chi Tiết</h3>
            <h4 class="mt-4">{{ film.filmDetail?.name }}</h4>
            <p>{{ film.filmDetail?.des }}</p>
            <h3 class="mt-5" style="color: #ff9658;">Trailer</h3>
            <iframe class="metaframe rptss mt-4" :src="trailerpath"
              frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen="true" width="100%"
              height="350px"></iframe>
          </div>
        </div>
      </div>
      <div class="col-0 col-lg-4 trending">
        <h2 class="mb-2 mt-2">Trending</h2>
        <hr>
        <div class="mt-4">
          <div v-for="(film, index) in film?.listFilmUser?.slice(0, 10)" :key="index" class="mb-3">
            <TrendingItem :film="film" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
.banner_filmdetail {
  height: 400px;
}

@media screen and (max-width: 992px) {


  .banner_filmdetail {
    height: 360px;
    width: 90%;
  }
}

@media screen and (max-width: 576px) {
  .filmdetail_wrap{
    justify-content: center;
    display:flex ;
  }
  .banner_filmdetail {
    height: 360px;
    width: 80%;
  }
}
</style>
