<script setup>
import FilmItem from "@/components/FilmItem/FilmItem.vue"
import { useFilmStore } from "@/stores/film";
const film = useFilmStore()
</script>
<template>
  <main>
    <div className='container'>
      <div>    
      </div>
      <div className='pt-3 pb-5'>
        <h3 className='mb-3'>Search Result : {{ film.listFilmSearch?.length }}</h3>
        <div className="row">
          <div v-for="(film) in film?.listFilmSearch" :key="film?.id"
            class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" style="height: 240px;">
            <FilmItem :film="film" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
