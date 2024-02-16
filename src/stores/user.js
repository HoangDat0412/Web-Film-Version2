import { service } from "@/service/baseService";
import { TOKEN } from "@/utils/config";
import { defineStore } from "pinia";
// import { TOKEN } from "@/utils/config";
export const useUserStore = defineStore("user", {
  state: () => ({
    userLogin: "",
    userInformation: null,
  
    userList:[],
  
    responseRegister: null,
  
    chechOutResult:null,
  
    updateSuccess:true,
  
    userCheckoutList:null,
  
    userUpdate:{},
    userUpdateResult:true,
  }),
  getters: {
    
  },
  actions: {
    async register(data){
      try {
        const result = await service.post(`/user`,data)
        if(result?.status === 201){
          this.responseRegister = true;
        }
      } catch (error) {
        console.log(error);
        this.responseRegister = false;
      }
    },

    async login(data){
      try {
        const result = await service.post(`/user/login`,data)
        if(result?.status === 200){
          this.userLogin = true;
          localStorage.setItem(TOKEN, result.data.token);
          alert("success")
        }
      } catch (error) {
        console.log(error);
        this.userLogin = false;
        alert("false")
      }
    },
    async getUserInformation(){
      try {
        const result = await service.get(`/user/information`)
        if(result?.status === 200){
          this.userInformation = result.data;
          console.log("information",result.data);
        }
      } catch (error) {
        console.log(error);
        this.userInformation = false;
      }
    },
    async logout(){
      localStorage.removeItem(TOKEN);
      this.userInformation = null;
      this.responseRegister = null;
      this.userLogin = "";
    },
    async updateUser(id,data){
      try {
        const result = await service.post(`/user/update/${id}`,data)
      if(result.status === 200){
        this.updateSuccess = result.data
        alert("Update thành công")
      }else{
        this.updateSuccess = false;
      }
      } catch (error) {
        console.log(error);
      }
    },
    async getListUser(){
      try {
        const result = await service.get("/user");
        if(result.status === 200){
          console.log("user list",result.data);
          this.userList = result?.data
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(id){
      try {
        const result = await service.delete(`/user/${id}`)
        if(result.status === 200){
          alert("Delete success !")
          await this.getListUser()
        }else{
          alert("Delete false !")
        }
      } catch (error) {
        console.log(error);
        alert("Delete false !")
      }
    },
    async getUserById(id){
      try {
        const result = await service.get(`/user/detail/${id}`)
        if(result.status === 200){
          console.log("user update",result.data);
          this.userUpdate = result.data
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
});

