<script setup>
import AddActor from "@/components/AddActor/AddActor.vue"
import AddFilmType from "@/components/AddFilmType/AddFilmType.vue"
import UploadFilm from "@/components/UploadFilm/UploadFilm.vue"

import { useFilmStore } from '@/stores/film';
import { checkNull } from '@/validation/validation';
import { ref,onBeforeMount } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute()
const film = useFilmStore()

const name = ref("")
const nameErr = ref("")
const hot = ref(true)
const status = ref(true)
const yRelease = ref("")
const yReleaseErr = ref("")
const director = ref("")
const directorErr = ref("")
const des = ref("")
const desErr = ref("")
const img = ref("")
const imgErr = ref("")

onBeforeMount(async ()=>{
  await film.setFilmDetail(route.params.id)
  name.value = film.filmDetail?.name;
  hot.value = film.filmDetail?.hot;
  status.value = film.filmDetail?.status;
  yRelease.value = film.filmDetail?.yRelease;
  director.value = film.filmDetail?.director;
  des.value = film.filmDetail?.director;
  img.value = film.filmDetail?.img;
})

const handleUpdate =async ()=>{
  !checkNull(name.value) ? nameErr.value = "name must is not null" : nameErr.value = "";
  !checkNull(yRelease.value) ? yReleaseErr.value = "yRelease must is not null" : yReleaseErr.value = "";
  !checkNull(director.value) ? directorErr.value = "director must is not null" : directorErr.value = "";
  !checkNull(des.value) ? desErr.value = "des must is not null" : desErr.value = "";
  !checkNull(img.value) ? imgErr.value = "img must is not null" : imgErr.value = "";
  const flag = checkNull(name.value) && checkNull(yRelease.value) && checkNull(director.value) && checkNull(des.value) && checkNull(img.value)
  const data = {
    name:name.value,
    hot:hot.value,
    des:des.value,
    yRelease:yRelease.value,
    director:director.value,
    status:status.value,
    img:img.value
  }
  if(flag){
    await film.updateFilm(route.params.id,data)
  }
}

</script>

<template>
  <main>
    <h3>Update Film</h3>
      <form class='mt-4'>
        <div class="row mb-4">
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <input type="text" name='name' v-model="name" class="form-control" />
              <label class="form-label">Name</label>
              <p style="color: red;">{{ nameErr }}</p>
            </div>
          </div>
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <select name='hot' v-model="hot" class='form-select'>
                <option :value="true">True</option>
                <option :value="false">Fasle</option>
              </select>
              <label class="form-label">Hot</label>
            </div>
          </div>
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <select name='status' v-model="status" class='form-select'>
                <option :value="true">True</option>
                <option :value="false">Fasle</option>
              </select>
              <label class="form-label">Status</label>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <input type="text" name="yRelease" v-model="yRelease" class="form-control" />
              <label class="form-label" >Year Release</label>
              <p style="color: red;">{{ yReleaseErr }}</p>
            </div>
          </div>
          <div class="col">
            <input type="text" name="director" v-model="director" class="form-control" />
            <label class="form-label">Director</label>
            <p style="color: red;">{{ directorErr }}</p>
          </div>
        </div>
        <div data-mdb-input-init class="form-outline mb-4">
          <textarea name="des" v-model="des"  class="form-control"></textarea>
          <label>Des</label>
          <p style="color: red;">{{ desErr }}</p>
        </div>
        <div data-mdb-input-init class="form-outline mb-4">
          <input name="img" v-model="img" class="form-control"/>
          <label>Img</label>
          <p style="color: red;">{{ imgErr }}</p>
        </div>
        <button data-mdb-ripple-init type="button" @click="()=> handleUpdate()" class="btn btn-primary btn-block mb-4">Update</button>
      </form>

    <AddActor/>
    <AddFilmType/>
    <UploadFilm/>
  </main>
</template>
