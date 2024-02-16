<script setup>
import { useUserStore } from '@/stores/user';
import { watchEffect } from 'vue';

const user = useUserStore()
watchEffect(async () => {
  await user.getListUser()
})
</script>

<template>
  <main>
    <h2>Manage User</h2>
    <div className='pt-4'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">UserType</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in user.userList" :key="index">
            <th scope="row">{{ item.id }}</th>
            <td>{{item.userName}}</td>
            <td>{{item.email}}</td>
            <td>{{item.userType}}</td>
            <td>
              <button className='btn btn-danger' @click="()=> user.deleteUser(item.id)">Delete</button>
            </td>
            <td>
              <RouterLink className='btn btn-success' :to="`/user/update/${item.id}`">Update</RouterLink>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </main>
</template>
