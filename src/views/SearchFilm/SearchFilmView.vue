<script setup>
import FilmItem from "@/components/FilmItem/FilmItem.vue"
import { useFilmStore } from "@/stores/film";
import { onBeforeMount,ref } from "vue";
import { storeToRefs } from "pinia";
const film = useFilmStore()
const {listFilmSearch} = storeToRefs(film)
const listFilm = ref([])
onBeforeMount(()=>{
  listFilm.value = listFilmSearch
})
</script>

<template>
  <main>
    <div className='container'>
      <div>
        
      </div>
    
      <div className='pt-3 pb-5'>
        <h3 className='mb-3'>Search Result : {{ listFilm.value?.length }}</h3>
        <div className="row">
          <div v-for="(film, index) in listFilm.value" :key="index"
            class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" style="height: 240px;">
            <FilmItem :film="film" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
