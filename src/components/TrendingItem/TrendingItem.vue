<script setup>
    const props = defineProps(["film"])
    const film = props.film;
    const imgpath = `http://localhost:4000/${film?.img}`
</script>

<template>
    <main style="box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;">
        <div className='trendingItem container-fluid mt-2'>
        <RouterLink to="/" class='row' >
            <div className="col-3" >
            <img width="100%" height="100%" :src="imgpath"  alt="" />
            </div>
            <div class='col-9 d-flex' style="align-items: center;">
                <div >
                    <h6>{{ film?.name }}</h6>
                    <h6>Năm phát hành: 2023</h6>
                </div>
            </div>
        </RouterLink>
    </div>
    </main>
</template>