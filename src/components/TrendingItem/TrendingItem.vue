<script setup>
import { LINKBE } from '@/utils/config';

const props = defineProps(["film"])
const film = props.film;
let img = film.img ? film.img : "/usr/src/app/public/film/1708399031409-transformers.jpg"
img = img.slice(img.indexOf("/public"));
let imgpath = `${LINKBE}${img}`
</script>

<template>
    <main style="box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;">
        <div className='trendingItem container-fluid mt-2'>
            <RouterLink :to="`/filmdetail/${film?.id}`" class='row'>
                <div className="col-3">
                    <img width="100%" height="100%" :src="imgpath" alt="" />
                </div>
                <div class='col-9 d-flex' style="align-items: center;">
                    <div>
                        <h6>{{ film?.name }}</h6>
                        <h6>Năm phát hành: 2023</h6>
                    </div>
                </div>
            </RouterLink>
        </div>
    </main>
</template>