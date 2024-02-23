<script setup>
import { useFilmStore } from '@/stores/film';
import { checkNull } from '@/validation/validation';
import { useRoute } from "vue-router";
const route = useRoute()
const film = useFilmStore()
import { ref,onBeforeMount } from 'vue';
const typeName = ref("")
const typeNameErr = ref("")
const handleAddFilmtype = async ()=>{
    !checkNull(typeName.value) ? typeNameErr.value = "typeName name không được bỏ trống" : typeNameErr.value = "";
    const flag = checkNull(typeName.value);
    if(flag){
        await film.createFilmType({
            filmId:route.params.id,
            typeName:typeName.value
        })
        typeName.value =""
    }
}
onBeforeMount(async ()=>{
    await film.setFilmDetail(route.params.id)
})
</script>

<template>
       <main>
        <h3 className='pt-5'>Update Film Type</h3>
      <div className='pt-4'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Type Name</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in film.filmDetail?.filmType" :key="index">
                <th scope="row">{{item.id}}</th>
                <td>{{item.typeName}}</td>
                <td>
                  <button className='btn btn-danger' @click="()=> film.deleteFilmType(route.params.id,item.id)" >Delete</button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <form class="mt-5">
        <input type="text" name='actorName' v-model="typeName" @keyup.enter="()=> handleAddFilmtype()" className="form-control" />
        <label className="form-label" >Type Name</label>
         <p style="color:red">{{ typeNameErr }}</p>
        <button className='btn btn-success' type='button' @click="()=> handleAddFilmtype()" >Add FilmType</button>
      </form>
    </main>
</template>