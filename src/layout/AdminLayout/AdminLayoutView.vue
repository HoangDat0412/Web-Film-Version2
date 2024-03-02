<script setup>
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { onBeforeMount } from 'vue';
const user = useUserStore()
onBeforeMount(async ()=>{
    await user.getUserInformation()
    if(user?.userInformation?.userType !== "ADMIN" && user?.userInformation?.userType !== "STAFF" ){
        router.push("/")
    }
})
</script>

<template>
    <main>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div
                        class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/"
                            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li class="nav-item">
                                <RouterLink to='/admin/user' class="nav-link align-middle px-0">
                                    <font-awesome-icon icon="fa-solid fa-home" /><span class="ms-1 d-none d-sm-inline">Manager User</span>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to='/admin/checkout' class="nav-link px-0 align-middle">
                                    <font-awesome-icon icon="fa-solid fa-money-check" /> <span
                                        className="ms-1 d-none d-sm-inline">Checkout</span>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to='/admin/checkoutbitcoin' class="nav-link px-0 align-middle">
                                    <font-awesome-icon icon="fa-solid fa-money-check" /> <span
                                        className="ms-1 d-none d-sm-inline">Checkout Bitcoin</span>
                                </RouterLink>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <font-awesome-icon icon="fa-solid fa-film" /> <span class="ms-1 d-none d-sm-inline">Film</span> </a>
                                <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <RouterLink to='/admin/film' class="nav-link px-0"> <span
                                                class="d-none d-sm-inline">Manager Film</span> </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to='/admin/createfilm' class="nav-link px-0"> <span
                                                class="d-none d-sm-inline">Create Film</span> </RouterLink>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col py-3" style="background-color: white;">
                    <RouterView/>
            </div>
        </div>
    </div>

</main></template>

<style>

</style>