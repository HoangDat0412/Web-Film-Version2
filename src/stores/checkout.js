import { service } from "@/service/baseService";
import { defineStore } from "pinia";
// import { TOKEN } from "@/utils/config";
export const useCheckoutStore = defineStore("checkout", {
  state: () => ({
    checkoutList : [],
    totalPrice:0,
    checkoutResult : false,
    userCheckoutList:[],
    totalPriceUser : 0
  }),
  getters: {
    
  },
  actions: {
    async createCheckout(data){
      try {
        const result = await service.post(`/checkout/create`,{
          moneyPay:200000,
          ...data
      })
      if (result.status === 201) {
        this.checkoutResult = true;
        alert("Check out thành công, bạn hay đăng nhập lại tài khoản !")
      } else {
        this.checkoutResult = false
        alert("Check out thất bại")
      }
      } catch (error) {
        this.checkoutResult = false
        alert("Check out thất bại")
      }
    },
    async getAllCheckout(){
      try {
        const result = await service.get('/checkout/getall')
        if(result?.status === 200){
            this.checkoutList = result.data
            console.log(result.data,"checkout list");
            let totalmoney = 0;
            result?.data?.map((item)=>{
               totalmoney += item.moneyPay
            })
            this.totalPrice = totalmoney
        }
    } catch (error) {
        console.log(error);
    }
    },
    async getUserCheckout(){
      try {
        const result = await service.get(`/checkout`)
        if(result.status === 200){
          this.userCheckoutList = result.data
          console.log(result.data);
          let totalmoney = 0;
          result?.data?.map((item)=>{
             totalmoney += item.moneyPay
          })
          this.totalPriceUser = totalmoney
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
});

