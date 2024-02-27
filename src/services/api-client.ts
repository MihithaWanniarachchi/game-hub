import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c01abc3f3f554258a962cda280f60f13',
    }
})