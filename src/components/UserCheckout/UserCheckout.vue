<script setup>
import { useCheckoutStore } from '@/stores/checkout';
import { watchEffect } from 'vue';
const checkout = useCheckoutStore()

watchEffect(async ()=>{
    await checkout.getUserCheckout()
})
</script>

<template>
    <main style="background-color: aliceblue;">
        <div class="table-responsive container mt-5" >
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr class="whitespace-nowrap">
                        <th scope="col">STT</th>
                        <th scope="col">Số Tài Khoản</th>
                        <th scope="col">Ngân Hàng</th>
                        <th scope="col">Ngày Thanh Toán</th>
                        <th scope="col">Ngày Hết Hạn</th>
                        <th scope="col">Số Tiền</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(item,key) in checkout?.userCheckoutList" :key="key" class="whitespace-nowrap">
                        <th scope="row">{{ key + 1 }}</th>
                        <td>{{ item?.accountNumber }}</td>
                        <td>{{ item?.bank }}</td>

                        <td>
                            {{item?.createdAt}}
                        </td>
                        <td>
                            {{item?.deadline}}
                        </td>
                        <td>{{item?.moneyPay}}</td>
                    </tr>


                    <tr>
                        <td colSpan="4">Tổng Tiền</td>
                        <td>{{ checkout?.totalPriceUser }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>