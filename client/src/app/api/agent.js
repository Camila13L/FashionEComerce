import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = "https://localhost:7029/api/";

const responseBody = ( response ) => response.data;

axios.interceptors.response.use( async response => {
    await sleep();
    return response;
}, (error) => {
    // let history = useNavigate();
    const {data, status} = error.response;//!
    switch (status) {
        case 400:
            if(data.errors) {
                const modelStateErrors =[];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modelStateErrors.push(data.errors[key]);
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401: 
            toast.error(data.title);
            break;
        case 500: 
            // //toast.error(data.title);
            // history('/server-error');
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const request = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.get(url).then(responseBody),
}

const Catalog = {
    list : () => request.get('Products'),
    details : (id) => request.get(`Products/${id}`)
}

const testErrors = {
    get400Error: () => request.get("Buggy/bad-request"),
    get401Error: () => request.get("Buggy/unauthorised"),
    get404Error: () => request.get("Buggy/not-fund"),
    get500Error: () => request.get("Buggy/server-error"),
    getValidationError: () => request.get("Buggy/validate-error"),
}

const agent = {
    Catalog,
    testErrors
}

export default agent;