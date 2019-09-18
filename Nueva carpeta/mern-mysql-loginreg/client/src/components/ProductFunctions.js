import axios from 'axios'

export const all = () => {
    return axios
    .get('products/all', {
    })
    .then(res => {

        return res.data
    })

}