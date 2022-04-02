import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://next-shipping-cart-back.herokuapp.com/',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
});

export interface ResponseType<T> {
    config?:any,
    data?:T,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}