<script setup>
import "./header.scss"
import {  watchEffect,ref } from 'vue'
import {useUserStore } from "@/stores/user";
import { useFilmStore } from "@/stores/film";
import router from "@/router";
const user = useUserStore()
const film = useFilmStore()

  watchEffect(async ()=>{
    await user.getUserInformation()
  })
const search = ref("");
const handleSearch = async ()=>{
  console.log("search value",search.value);
   await film.searchFilm({
    name:search.value
  })
  router.push({path:"/search"})
}



</script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">ĐẬU PHIM</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to='checkout' href="#">Checkout </RouterLink>
            </li>
          </ul>
          <div className="navbar-nav">
            <div class="input-group mt-2 mt-lg-0">
              <input type="text" class="form-control" v-model="search"  placeholder="" />
              <button @click="()=> handleSearch()" class="btn btn-secondary" >Search</button>
            </div>
          </div>
          <div v-if="user.userInformation" class="navbar-nav profile_user align-items-center mt-3 mt-lg-0">
            <RouterLink to="/profile" class="avatar me-0 me-lg-3">
              <img :src="user.userInformation?.avatar" class="rounded-circle" style="width: 50px;"
                alt="Avatar" />
               <h6>{{ user.userInformation?.userName }}</h6>
            </RouterLink>
            <RouterLink to="/" style="height: 40px;" class="btn btn-secondary h" @click="user.logout()">Logout </RouterLink>
          </div>
          <div v-else class="navbar-nav profile_user align-items-center mt-3 mt-lg-0">
            <RouterLink to="/login" style="height: 40px;" class="btn btn-secondary h">Login </RouterLink>
            <RouterLink to="/register" style="height: 40px;" class="btn btn-secondary h">Register </RouterLink>
          </div>



         
        </div>
      </div>
    </nav>
  </main>
</template>


