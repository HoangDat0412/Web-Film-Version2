<script setup>
import { useFavouriteFilmStore } from '@/stores/favouritefilm';
import { useUserStore } from '@/stores/user';
import {useCheckoutStore} from "@/stores/checkout"
// import { ValidateEmail, checkNull } from '@/validation/validation';
import { ref ,onBeforeMount} from 'vue';
const user = useUserStore()
const favouriteFilm = useFavouriteFilmStore()
const checkout = useCheckoutStore()


const userName = ref();
const passWord = ref("")
const email = ref("")
const errorPassword = ref("")
const errorUserName = ref("");
const errorEmail = ref("");

onBeforeMount(async ()=>{
    await user.getUserInformation()
    await favouriteFilm.getFavouriteFilm()
    await checkout.getUserCheckout()
    await checkout.getUserCheckoutBitcoin()
  userName.value = user.userInformation?.userName
  email.value =user.userInformation?.email
})

// const handleUpdate = async ()=>{
//     !checkNull(email.value) ? errorEmail.value = "email must is not null" : errorEmail.value = "";
//     !checkNull(passWord.value) ? errorPassword.value = "passWord must is not null" : errorPassword.value = "";
//     !checkNull(userName.value) ? errorUserName.value = "userName must is not null" : errorUserName.value = "";
//     !ValidateEmail (email.value) ? errorEmail.value ="email is invalid" : errorEmail.value =""

//         const data = {
//             email: email.value,
//             userName : userName.value,
//             passWord: passWord.value
//         };
//         const flag = checkNull(email.value) && checkNull(passWord.value) && checkNull(userName.value) && ValidateEmail(email.value);
//         if (flag) {
//             console.log(data);
            
//         }
// }

</script>

<template>
    <main>
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className="col-7">
                    <form >
                        <div className='form-group position-relative mb-2'>
                            <label htmlFor="taikhoan">Tài Khoản</label>
                            <input
                                name="userName"
                                className="form-control"
                                type="text"
                                v-model="userName"
                            />
                            <p style="color: red;">{{ errorUserName }}</p>
                        </div>
                        <div class='form-group position-relative mb-2'>
                            <label htmlFor="matKhau" >Mật Khẩu</label>
                            <input
                                name="passWord"
                                className="form-control"
                                type="text"
                                v-model="passWord"
                            />
                            <p style="color: red;">{{ errorPassword }}</p>
                        </div>
                        <div class='form-group position-relative mb-2'>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                className="form-control"
                                type="email"
                                v-model="email"
                            />
                            <p style="color: red;">{{ errorEmail }}</p>
                        </div>
                        <!-- <button type="button" @click="handleUpdate" class="btn btn-success mt-3 container">
                            Cập Nhật
                        </button> -->
                    </form>
                </div>
                <div className="col-5">
                <ul className="list-group mt-2">
            <li className="list-group-item text-muted">Hoạt động</li>

            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Phim yêu thích: {{ favouriteFilm.listFavouriteFilm?.length }}</strong> 
              </span>
              
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Thanh toán: {{ checkout.userCheckoutList.length + checkout.userCheckoutBitcoinList.length }}</strong> 
              </span>
          
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Tổng tiền: {{ checkout.totalPriceUser }} VND</strong> 
              </span>
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Tổng bitcoin: {{ checkout.totalBitcoinUser }} BTC</strong> 
              </span>
            </li>
          </ul>
                </div>
            </div>

            <div v-if="user?.userInformation?.userType===`ADMIN` || user?.userInformation?.userType ===`STAFF`">
              <RouterLink to="/admin" class="btn btn-success">
                GO TO ADMIN PAGE
            </RouterLink>
            </div>
        </div>
    </main>
</template>