<script setup>
import "./header.scss"
import { ref } from 'vue'
import {useUserStore } from "@/stores/user";
import { useFilmStore } from "@/stores/film";
import router from "@/router";
const user = useUserStore()
const film = useFilmStore()
import { useRoute } from 'vue-router';
const route = useRoute()

const search = ref("");
const handleSearch = async ()=>{
   await film.searchFilm({
    name:search.value
  })
  search.value = ""
 if(route.name !== "search"){
  console.log("redireact");
  router.push({path:"/search"})
 }
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
              <RouterLink class="nav-link active" aria-current="page" to="/">Trang Chủ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to='checkout' href="#">Thanh Toán </RouterLink>
            </li>
          </ul>
          <div className="navbar-nav">
            <div class="input-group mt-2 mt-lg-0">
              <input type="text" class="form-control" @keyup.enter="()=> handleSearch()" v-model="search"  placeholder="" />
              <button @click="()=> handleSearch()"  class="btn btn-secondary" >
                <font-awesome-icon icon="fa-solid fa-search" />
              </button>
            </div>
          </div>
          <div v-if="user.userInformation" class="navbar-nav profile_user align-items-center mt-3 mt-lg-0">
            <RouterLink to="/profile" class="avatar me-0 me-lg-3">
              <img :src="user.userInformation?.avatar" class="rounded-circle" style="width: 50px;"
                alt="Avatar" />
               <h6>{{ user.userInformation?.userName }}</h6>
            </RouterLink>
            <RouterLink to="/" style="height: 40px;" class="btn btn-secondary h" @click="user.logout()">Đăng xuất </RouterLink>
          </div>
          <div v-else class="navbar-nav profile_user align-items-center mt-3 mt-lg-0">
            <RouterLink to="/login" style="height: 40px;" class="btn btn-secondary h">Đăng Nhập </RouterLink>
            <RouterLink to="/register" style="height: 40px;" class="btn btn-secondary h">Đăng Ký </RouterLink>
          </div>



         
        </div>
      </div>
    </nav>
  </main>
</template>


