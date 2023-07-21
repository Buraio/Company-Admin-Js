import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();

export const registerUser = async (body) => {
    const requestObj = {
        url: `${baseUrl}auth/register`,
        method: "POST",
        body,
    };

    const createdUser = await baseFetch.bodyAndNoAuth(requestObj);
    return createdUser;
};

export const getAllUsers = async (token) => {
    const requestObj = {
        url: `${baseUrl}users`,
        method: "GET",
        token,
    };

    const userList = await baseFetch.onlyAuth(requestObj);
    return userList;
};

export const getAllUsersOutOfWork = async (token) => {
    const requestObj = {
        url: `${baseUrl}admin/out_of_work`,
        method: "GET",
        token,
    };

    const userList = await baseFetch.onlyAuth(requestObj);
    return userList;
};
