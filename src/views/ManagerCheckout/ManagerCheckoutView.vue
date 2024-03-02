<script setup>
import { useCheckoutStore } from '@/stores/checkout';
import { watchEffect } from 'vue';
const  checkout = useCheckoutStore()
import moment from 'moment';
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
            <th scope="col">User ID</th>
            <th scope="col">Order ID</th>
            <th scope="col">Money Pay</th>
            <th scope="col">Create At</th>
            <th scope="col">Deadline</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkout?.checkoutList" :key="index">
                <th scope="row">{{index +1}}</th>
                <td>{{item?.userId}}</td>
                <td>{{item?.orderid}}</td>
                <td>{{item?.moneyPay}}</td>
                <td>{{moment(item?.createdAt).format('DD-MM-YYYY')}}</td>
                <td>{{moment(item?.deadline).format('DD-MM-YYYY')}}</td>
                <td>{{item?.status}}</td>

              </tr>

        </tbody>
      </table>
      </div>


    </div>
  </main>
</template>
