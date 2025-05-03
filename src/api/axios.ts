import axios from "axios";
import {useAuth} from "@/hooks/useAuth";

export const apis = axios.create({
    baseURL: "http://localhost:3000"
    //baseURL: "https://backand.serveo.net"
});

apis.interceptors.request.use(
    config => {
        const token = useAuth.getState().session.token; // ambil token di user
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
