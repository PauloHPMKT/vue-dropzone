import { http } from "./http"

export default {
  criarImagem: (data) => {
    console.log(data)
    return http.post(`/books/register`, data)
  },
}