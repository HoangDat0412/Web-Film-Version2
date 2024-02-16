<script setup>
    import { ref } from 'vue'
    import { checkNull,ValidateEmail } from "@/validation/validation";
    import {useUserStore } from "@/stores/user";
import router from '@/router';
    const user = useUserStore()
    const email = ref("")
    const errorEmail = ref("")
    const passWord = ref("")
    const errorPassword = ref("")

    const handleLogin = async ()=>{
        console.log("email",email.value);
        console.log("password",passWord.value);
        if(!checkNull(email.value)){
            errorEmail.value = "email must is not null"
        }else{
            errorEmail.value = ""
        }
        if(!checkNull(passWord.value)){
            errorPassword.value = "password must is not null"
        }else{
            errorPassword.value = ""
        }
        !ValidateEmail (email.value) ? errorEmail.value ="email is invalid" : errorEmail.value =""

        const data = {
            email:email.value,
            passWord:passWord.value
        }
        const flag = checkNull(email.value) && checkNull(passWord.value) && ValidateEmail(email.value)
        if(flag){
            await user.login(data)
            router.push({path:"/",name:"home"})
        }
    }
</script>

<template>
  <main>
    <div className='jss2526'>
            <div className="signin">
                <RouterLink to="/">
                    <h2  className='text-center logo-film-login pb-3'>ĐẬU PHIM</h2>
                </RouterLink>
                <div className="mb-3 mt-2">
                    <p className="text" >
                        Đăng nhập để được xem phim !
                    </p>
                </div>
                <div>
                    <form>
                        <div className='form-group position-relative mb-2'>
                            <label htmlFor="email" >Tài Khoản</label>
                            <input
                                name="email"
                                className="form-control"
                                type="email"
                                v-model="email"
                            />
                            <p style="color: red;">{{ errorEmail }}</p>
                        </div>
                        <div class='form-group position-relative mb-2'>
                            <label htmlFor="passWord" >Mật Khẩu</label>
                            <input
                                name="passWord"
                                className="form-control"
                                type="password"
                                v-model="passWord"
                            />
                            <p style="color: red;">{{ errorPassword }}</p>

                        </div>
                        <button class="btn btn-success mt-3 container" @click.prevent="()=> handleLogin()">
                            Log in
                        </button>

                        <RouterLink to="/register" class="mt-3">
                            Or Register now !
                        </RouterLink>
                    </form>
                </div>
            </div>
    </div> 
  </main>
</template>

<style scoped>
.jss2526{
    /* width: 580px; */
    height: fit-content;
    z-index: 1000;
    position: relative;
    border-radius: 6px;
    background-image: linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9));

}
.logo-film-login{
    color: #fff;
    text-decoration: none;
}

.signin {
    color: #fff;
    padding: 60px 32px 30px;
    margin: 0 20px;
  }
.text {
    text-align: center;
    margin-bottom: 30px;
}

@media screen and (min-width: 992px){
    .jss2526{
    width: 580px;
    }
}
</style>
