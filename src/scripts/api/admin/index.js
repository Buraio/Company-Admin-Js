import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();
const token = localStorage.getItem("token");

export const getAllUsersOutOfWork = async () => {
    const requestObj = {
        url: `${baseUrl}admin/out_of_work`,
        method: "GET",
        token,
    };

    const userList = await baseFetch.onlyAuth(requestObj);
    return userList;
};