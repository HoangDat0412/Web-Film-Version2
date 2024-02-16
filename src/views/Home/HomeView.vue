<script setup>
import { watchEffect } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import './home.scss';
import FilmItem from "@/components/FilmItem/FilmItem.vue"
import TrendingItem from '@/components/TrendingItem/TrendingItem.vue';
const breakpoints = {
      500: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    }
import {useFilmStore} from "@/stores/film"
const film = useFilmStore()
watchEffect(async ()=>{
  await film.setListFilm()

})

console.log("list film",film.listFilmUser);
</script>

<template>
  <main>
    <h2 class="mt-4 mb-5">Phim Hot</h2>

    <Carousel :items-to-show="1.5" :breakpoints="breakpoints" :wrap-around="true">
    <Slide v-for="(film,index) in film?.listFilmUser?.slice(0,7)" :key="index">
      <div class="carousel__item" style="width: 80%; height: 270px;"><FilmItem :film="film"/></div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>


  <div class="row mt-5">
    <div class="col-12 col-md-8">
      <h2 class="mb-5">Phim Mới</h2>
      <div class="row">
        <div v-for="(film,index) in film?.listFilmUser" :key="index" class="col-6 col-sm-3 col-md-4 col-lg-3 mb-3" style="height: 240px;">
          <FilmItem :film="film"/>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 trending">
      <h2 class="mb-2 mt-2">Trending</h2>
      <hr>
      <div class="mt-4" >
        <div v-for="(film,index) in film?.listFilmUser?.slice(0,7)" :key="index" class="mb-3">
          <TrendingItem :film="film"/>
        </div>
        
      </div>
    </div>
  </div>
  </main>
</template>

<style scoped>

</style>
