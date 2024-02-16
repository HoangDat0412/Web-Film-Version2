<script setup>
    import HeaderView from '@/components/Header/HeaderView.vue';
    import FooterView from '@/components/Footer/FooterView.vue';
</script>

<template>
    <main class="container-fluid container-lg">
        <HeaderView/>
        <RouterView/>
        <FooterView/>
    </main>
</template>