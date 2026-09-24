import axios from 'axios';

export default axios.create({
    baseURL:'http://3.21.52.54:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
