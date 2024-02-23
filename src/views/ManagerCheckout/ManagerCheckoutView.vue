<script setup>
import { useCheckoutStore } from '@/stores/checkout';
import { watchEffect } from 'vue';
const  checkout = useCheckoutStore()

watchEffect(async ()=>{
  await checkout.getAllCheckout()
})
</script>

<template>
  <main>
    <div>
         <h2>Manage Checkout</h2>
      <div className='pt-4'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Account Number</th>
            <th scope="col">Bank</th>
            <th scope="col">Money Pay</th>
            <th scope="col">Deadline</th>
            <th scope="col">Create At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkout?.checkoutList" :key="index">
                <th scope="row">{{index +1}}</th>
                <td>{{item?.email}}</td>
                <td>{{item?.accountNumber}}</td>
                <td>{{item?.bank}}</td>
                <td>{{item?.moneyPay}}</td>
                <td>{{item?.deadline}}</td>
                <td>{{item?.createdAt}}</td>
              </tr>

        </tbody>
      </table>
      </div>


    </div>
  </main>
</template>
