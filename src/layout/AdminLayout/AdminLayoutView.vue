<script setup>
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { onBeforeMount } from 'vue';
const user = useUserStore()
onBeforeMount(async ()=>{
    await user.getUserInformation()
    if(user.userInformation.userType === "USER" || user.userInformation.userType === "CLIENT"){
        router.push("/")
    }
})
</script>

<template>
    <main>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div
                        className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/"
                            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li className="nav-item">
                                <RouterLink to='/admin/user' className="nav-link align-middle px-0">
                                    <font-awesome-icon icon="fa-solid fa-home" /><span className="ms-1 d-none d-sm-inline">Home</span>
                                </RouterLink>
                            </li>

                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <font-awesome-icon icon="fa-solid fa-film" /> <span className="ms-1 d-none d-sm-inline">Film</span> </a>
                                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <RouterLink to='/admin/film' className="nav-link px-0"> <span
                                                className="d-none d-sm-inline">Manager Film</span> </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to='/admin/createfilm' className="nav-link px-0"> <span
                                                className="d-none d-sm-inline">Create Film</span> </RouterLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <RouterLink to='/admin/checkout' className="nav-link px-0 align-middle">
                                    <font-awesome-icon icon="fa-solid fa-money-check" /> <span
                                        className="ms-1 d-none d-sm-inline">Checkout</span>
                                </RouterLink>
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