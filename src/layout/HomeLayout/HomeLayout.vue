<script setup>
    import HeaderView from '@/components/Header/HeaderView.vue';
    import FooterView from '@/components/Footer/FooterView.vue';
    import {watchEffect} from 'vue'
import { useUserStore } from '@/stores/user';
import { useCheckoutStore } from '@/stores/checkout';

    const user = useUserStore()
    const checkout = useCheckoutStore()
    watchEffect(async ()=>{
        await user.getUserInformation()
        await checkout.checkDeadline()
        if(user.userInformation.userType === "CLIENT" && checkout.deadline === false){
            alert("Hết thời hạn sử dụng tài khoản vip, bạn hãy thanh toán để tiếp tục xem phim")
            user.logout()
        }
    })

</script>

<template>
    <main class="container-fluid container-lg">
        <HeaderView/>
        <RouterView/>
        <FooterView/>
    </main>
</template>