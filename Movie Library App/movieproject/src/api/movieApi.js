import axios from "axios"

const API=axios.create(({
    baseURL:"https://www.omdbapi.com/"
}))

export default API