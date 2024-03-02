<script setup>
import { useCheckoutStore } from '@/stores/checkout';
import { watchEffect } from 'vue';
const  checkout = useCheckoutStore()

watchEffect(async ()=>{
  await checkout.getAllCheckoutBitcoin()
})
</script>

<template>
  <main>
    <div>
         <h2>Manage Checkout with Bitcoin</h2>
      <div className='pt-4'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Địa chỉ ví</th>
            <th scope="col">Bitcoin</th>
            <th scope="col">Create At</th>
            <th scope="col">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkout?.checkoutBitcoinList" :key="index">
                <th scope="row">{{index +1}}</th>
                <td>{{item?.email}}</td>
                <td>{{item?.walletaddress}}</td>
                <td>{{item?.bitcoinprice}}</td>
                <td>{{item?.createdAt}}</td>
                <td>{{item?.deadline}}</td>
              </tr>

        </tbody>
      </table>
      </div>


    </div>
  </main>
</template>
