<script setup>
  import UserInformation from "@/components/UserInformation/UserInformation.vue"
  import UserCheckout from "@/components/UserCheckout/UserCheckout.vue"
  import FavouriteFilm from "@/components/FavouriteFilm/FavouriteFilm.vue"
</script>

<template>
  <main>
    <div className='profile pt-5 pb-5 '>
      <nav>
        <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
         
            <button style="color: #ff9658; font-weight: 600;" class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Thông Tin Tài Khoản</button>
            <button style="color: #ff9658; font-weight: 600;" class="nav-link" id="nav-chekout-tab" data-bs-toggle="tab" data-bs-target="#nav-chekout" type="button" role="tab" aria-controls="nav-chekout" aria-selected="true">Lịch Sử Thanh Toán</button>
            <button style="color: #ff9658; font-weight: 600;" class="nav-link" id="nav-favouritefilm-tab" data-bs-toggle="tab" data-bs-target="#nav-favouritefilm" type="button" role="tab" aria-controls="nav-favouritefilm" aria-selected="true">Phim Yêu Thích</button>
          
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <UserInformation/>
        </div>
        <div className="tab-pane fade" id="nav-chekout" role="tabpanel" aria-labelledby="nav-chekout-tab">
          <UserCheckout/>
        </div>
        <div className="tab-pane fade" id="nav-favouritefilm" role="tabpanel" aria-labelledby="nav-favouritefilm-tab">
          <FavouriteFilm/>

        </div>
      </div>
    </div>
  </main>
</template>
