import axios from "axios"

const baseUrl = 'https://60ab66305a4de40017cc9fbf.mockapi.io/api'

export const getLink = (id) => {
    axios.get(baseUrl + '/category' + id)
    .then(response => response.data)
}