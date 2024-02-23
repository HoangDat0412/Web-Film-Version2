<script setup>
import { useFilmStore } from '@/stores/film';
import { LINKBE } from '@/utils/config';
import { watchEffect } from 'vue';

const film = useFilmStore()
watchEffect(async()=>{
  await film.setListFilm()
})

function handleImg(img){
  if(img){
    let imgpath = img.slice(img.indexOf("/public"));
    return `${LINKBE}${imgpath}`
  }else{
    return null
  }
}

</script>

<template>
  <main>
    <h2>Manage Film</h2>
      <div className='pt-4'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">img</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,key) in film.listFilmUser" :key="key">
                <th scope="row">{{item?.id }}</th>
                <td>{{item?.name }}</td>
                <td><img :src="handleImg(item?.img ? item?.img  : false)" style="width: 50px; height: 60px;" /></td>
                <td>
                  <button class='btn btn-danger' @click="()=> film.deleteFilm(item.id)" >Delete</button>
                </td>
                <td>
                  <RouterLink :to="`/film/update/${item?.id}`" className='btn btn-success'>Update</RouterLink>
                </td>
              </tr>

          </tbody>
        </table>
      </div>
  </main>
</template>
