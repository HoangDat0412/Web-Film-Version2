import { service } from "@/service/baseService";
import { defineStore } from "pinia";
// import { TOKEN } from "@/utils/config";
export const useFilmStore = defineStore("film", {
  state: () => ({
    listFilmUser :null,
    filmDetail:null,
    filmWatching:null,
    listFilmAdmin:null,
    listFilmSearch:[],

    deleteResult:true,
    updateResult:true,
    createResult:true
  }),
  getters: {
    getListFilmSearch(state){
      return state.listFilmSearch
    }
  },
  actions: {
    async setListFilm(){
      try {
        const result = await service.get(`/film`)
      this.listFilmUser = result.data
      } catch (error) {
        console.log(error);
      }
    },
    async setFilmDetail(id){
      try {
        const result = await service.get(`/film/detail/${id}`)
        if(result.status === 200){
          this.filmDetail = result.data
          console.log("filmDetail",result.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async setFilmWatching(id){
      try {
        const result = await service.get(`/film/watching/${id}`)
        if(result.status === 200){
          this.filmWatching = result.data
          console.log("film watching",result.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async searchFilm(data){
      try {
        const result = await service.post(`/film/search`,data);
        if(result.status === 200){
          this.listFilmSearch = result?.data
        }
      }catch(err){
        console.log(err);
      }
    },
    async deleteFilm(id){
      try {
        const result = await service.delete(`/film/${id}`)
        if (result.status ===200 ) {
          alert("Delete success !")
          await this.setListFilm()
        }else{
          alert("Delete false !")
        }
      } catch (error) {
        console.log(error);
        alert("Delete false !")
      }
    },
    async createFilm(data){
      try {
        const result = await service.post("/film/create",data)
        if(result.status === 201){
          alert("create success !")
        }else{
          alert("create false !")
        }
      } catch (error) {
        alert("create false !")
        console.log(error);
      }
    },
    async updateFilm(id,data){
      try {
        const result = await service.post(`/film/update/${id}`,data)
        if(result.status === 200){
          alert("Update success")
        }
      } catch (error) {
        console.log("Update false");
      }
    },
    async createActor(data){
      try {
        const result = await service.post("/actor",data)
        if(result.status === 201){
          alert("add actor success")
          await this.setFilmDetail(data.filmId)
        }else{
          alert("add actor false")
        }
      } catch (error) {
        console.log(error);
        alert("add actor false")
      }
    },
    async deleteActor(filmId,id){
      try {
        const result = await service.delete(`/actor/${id}`)
        if (result.status === 200) {
          alert("Delete success !")
          await this.setFilmDetail(filmId)   
        } else {
          alert("Delete false !")
        }
      } catch (error) {
        
        alert("Delete false !")
      }
    },
    async createFilmType(data){
      try {
        const result = await service.post("/filmtype",data)
        if(result.status === 201){
          alert("add film type success")
          await this.setFilmDetail(data.filmId)
        }else{
          alert("add film type false")
        }
      } catch (error) {
        console.log(error);
        alert("add film type false")
      }
    },
    async deleteFilmType(filmId,id){
      try {
        const result = await service.delete(`/filmtype/${id}`);
        if (result.status === 200) {
          
          await this.setFilmDetail(filmId)   
          alert("Delete success !")
        } else {
          alert("Delete false !")
        }
      } catch (error) {
        
        alert("Delete false !")
      }
    },
    async uploadFilm(id,data){
      try {
        const result = await service.upload(`/film/uploadfilm/${id}`,data)
        if(result.status === 201){
          this.setFilmDetail(id)
          alert("Upload success !")
        }else{
          alert("Upload false !")
        }
      } catch (error) {
        console.log(error);
        alert("Upload false !")
      }
    }

  },
});

