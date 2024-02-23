<script setup>
import { useFilmStore } from '@/stores/film';
import { LINKBE } from '@/utils/config';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute()
const film = useFilmStore()
let imgpath =ref("");
let trailerpath =ref("");
let srcpath =ref("")
onBeforeMount(async () => {
    await film.setFilmDetail(route.params.id)
    imgpath.value = film.filmDetail?.img ? film.filmDetail.img : ""
    if (imgpath.value) {
        imgpath.value = imgpath.value.slice(imgpath.value.indexOf("/public"));
        imgpath.value = `${LINKBE}${imgpath.value}`
    }
    trailerpath.value = film.filmDetail?.trailer ? film.filmDetail.trailer : ""
    if (trailerpath.value) {
        trailerpath.value = trailerpath.value.slice(trailerpath.value.indexOf("/public"));
        trailerpath.value = `${LINKBE}${trailerpath.value}`
    }
    srcpath.value = film.filmDetail?.src ? film.filmDetail.src : ""
    if (srcpath.value) {
        srcpath.value = srcpath.value.slice(srcpath.value.indexOf("/public"));
        srcpath.value = `${LINKBE}${srcpath.value}`
    }
})

const img = ref({})
const src = ref({})
const trailer = ref({})
const hanleSubmit = async () => {
    let formData = new FormData()
    const image = img.value;
    const src1 = src.value;
    const trailer1 = trailer.value
    formData.append('img', image.value)
    formData.append('src', src1.value)
    formData.append('trailer', trailer1.value)
    await film.uploadFilm(route.params.id, formData)
}


</script>

<template>

    <form>
        <div className='form-group position-relative mb-2 mt-5'>
            <h5>Img</h5>
            <img :src="imgpath" style="width: 100px; height: 120px;" alt="">
        </div>
        <div className='form-group position-relative mb-2'>
            <h5>Src</h5>
            <iframe class="metaframe rptss mt-4" :src="srcpath" frameborder="0" scrolling="no" allow="encrypted-media"
                allowfullscreen="true" width="400px" height="250px"></iframe>
        </div>
        <div className='form-group position-relative mb-2'>
            <h5>Trailer</h5>
            <iframe class="metaframe rptss mt-4" :src="trailerpath" frameborder="0" scrolling="no" allow="encrypted-media"
                allowfullscreen="true" width="400px" height="250px"></iframe>
        </div>


    </form>

    <h3 class="mt-5">Upload Film</h3>
    <form>
        <div className='form-group position-relative mb-2'>
            <label htmlFor="img">img</label>
            <input name="img" className="form-control" @change="(e) => img.value = e.target.files[0]" type="file" />
        </div>
        <div className='form-group position-relative mb-2'>
            <label htmlFor="src">src</label>
            <input name="src" className="form-control" @change="(e) => src.value = e.target.files[0]" type="file" />
        </div>
        <div className='form-group position-relative mb-2'>
            <label htmlFor="trailer">trailer</label>
            <input name="trailer" className="form-control" @change="(e) => trailer.value = e.target.files[0]" type="file" />
        </div>
        <button class="btn btn-success mt-3 container" @click.prevent="() => hanleSubmit()">
            Upload
        </button>

    </form>
</template>

