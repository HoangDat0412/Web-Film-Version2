<script setup>
import { LINKBE } from "@/utils/config";
import "./filmitem.scss"

const props = defineProps(['film'])
let film = props.film
let img = film.img ? film.img : "/usr/src/app/public/film/1708399031409-transformers.jpg"
img = img.slice(img.indexOf("/public"));
let imgpath = `${LINKBE}${img}`


</script>

<template>
    <main style="height: 100%;"> 
        <div class="film_item" >
                <RouterLink :to="`/filmdetail/${film?.id}`" class="myui-vodlist__thumb" :style="{background:'url(' + imgpath + ')'}">
                    <span class="play hidden-xs"></span>
                    <span class="pic-tag pic-tag-top">
                        Full HD
                    </span>
                    <div class="myui-vodlist__detail">
                        <h3 class="title text-overflow pb-2">{{ film?.name }}</h3>
                    </div>
                </RouterLink>
            </div>
    </main>
</template>