import {apis} from './axios.ts'

export const Login = async (inputs: any) => {
    const res = await apis.post("/login", inputs);
    return res.data;
};

