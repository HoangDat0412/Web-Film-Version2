<script setup>
import TrendingItem from '@/components/TrendingItem/TrendingItem.vue';
import { useFilmStore } from '@/stores/film';
import { useRateStore } from '@/stores/rate';
import { useCommentStore } from "@/stores/comment"
import { onBeforeMount,watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import StarRating from 'vue-star-rating'
import { checkNull } from '@/validation/validation';
import { useFavouriteFilmStore } from '@/stores/favouritefilm';
import { LINKBE } from '@/utils/config';
import { useUserStore } from '@/stores/user';
import router from '@/router';
const route = useRoute()
const film = useFilmStore();
const rate = useRateStore()
const favouriteFilm = useFavouriteFilmStore()
const commentStore = useCommentStore()
const user = useUserStore()
const srcpath = ref("")
watchEffect(async ()=>{
  await user.getUserInformation()
  if(user.userInformation.userType !=="ADMIN" && user.userInformation.userType !=="STAFF" && user.userInformation.userType !=="CLIENT"){
    alert("bạn cần nâng cấp tài khoản để xem phim")
    router.push({
      path:"/checkout",
      replace: true
    })
  }
})
onBeforeMount(async()=>{
  await film.setFilmWatching(route.params.id)
  await rate.setTotalPoint(route.params.id)
  await commentStore.getAllComment(route.params.id)
  await film.setListFilm()
  await favouriteFilm.getFavouriteFilm()
  favouriteFilm.checkFilmFavourite(route.params.id)
  rating.value = rate.totalPoint
  let src = film.filmWatching?.src ? film.filmWatching?.src : "/usr/src/app/public/film/1708399046429-trailernvbkt.mp4"
  src = src.slice(src.indexOf("/public"));
  srcpath.value = `${LINKBE}${src}`
})
const rating = ref(0)
const comment = ref("")
const handleComment = async () => {
  const flag = checkNull(comment.value)
  if (flag) {
    const data = {
      filmId: route.params.id,
      comment: comment.value
    }
    await commentStore.createComment(data)
    comment.value = ""
  }
}
const setRating = async () => {
  const data = {
    filmId: route.params.id,
    rate: rating.value
  }
  await rate.setRate(data)
  console.log("rate", rating.value);
}
</script>

<template>
  <main>
    <div>
      <iframe class="mt-4" :src="srcpath" frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen="true" width="100%" height="500px"></iframe>
      <div class="d-flex justify-content-between">
        <div class="mt-4">
        <h3>Rate (lượt đánh giá : {{ rate?.numberRate }}) </h3>
        <StarRating v-model:rating="rating" @update:rating="setRating" :increment="0.5" />
      </div>
      <div class="mt-4">
        <button class="btn" @click="favouriteFilm.createAndDeleteFavouriteFilm({
          filmId:parseInt(route.params.id)
        })">
          <font-awesome-icon v-if="favouriteFilm.checkFilmIsFavourite" style="font-size: 30px; color: red;" icon="fa-solid fa-heart" />
          <font-awesome-icon v-else style="font-size: 30px; color: white;" icon="fa-solid fa-heart" />
        </button>
      </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 ">
        <div>
          <h3 style="color: #ff9658;">Nội Dung Chi Tiết</h3>
          <h4 class="mt-4">{{ film.filmWatching?.name }}</h4>
          <p>{{ film.filmWatching?.des }}</p>
        </div>

        <div class="comment p-3" style="background-color: white;">

          <div class=" pb-4">
            <textarea class="form-control" v-model="comment" @keyup.enter="handleComment" placeholder="Viết bình luận ..." rows="3"></textarea>
            <button class="btn" style="background-color: #9cb4d8;" @click="handleComment">Comment</button>
          </div>

          <div>
            <div v-for="(i,key) in commentStore?.listComment" :key="key" class="card mb-3">
              <div class="card-body">
                <div class="d-flex flex-start">
                  <img class="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="40"
                    height="40" />
                  <div class="w-100">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h6 class="text-primary fw-bold mb-0">
                        {{ i?.userName }}
                        <span class="text-dark ms-2">{{ i?.comment }} </span>
                      </h6>
                      <p class="mb-0">{{ i?.createdAt }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="col-0 col-lg-4 trending">
        <h2 class="mb-2 mt-2">Thịnh Hành</h2>
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
