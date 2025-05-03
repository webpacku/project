import {apis} from "./axios";

export const getStatus = async () => {
    const res = await apis.get("/status");
    return res.data;
};

export const addStatus = async () => {
    const res = await apis.get("/status");
    return res.data;
};

export const removeStatus = async () => {
    const res = await apis.get("/status");
    return res.data;
};
export const updateStatus = async () => {
    const res = await apis.get("/status");
    return res.data;
};
