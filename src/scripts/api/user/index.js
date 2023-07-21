import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();
const token = localStorage.getItem("token");

/* GET */
export const getAllUsers = async () => {
    const requestObj = {
        url: `${baseUrl}users`,
        method: "GET",
        token,
    };

    const userList = await baseFetch.onlyAuth(requestObj);
    return userList;
};

export const getUserInfo = async () => {
    const requestObj = {
        url: `${baseUrl}users/profile`,
        method: "GET",
        token,
    };

    const userInfo = await baseFetch.onlyAuth(requestObj);
    return userInfo;
};

export const getAuthenticatedUserDepartment = async () => {
    const requestObj = {
        url: `${baseUrl}users/departments`,
        method: "GET",
        token,
    };

    const userDepartment = await baseFetch.onlyAuth(requestObj);
    return userDepartment;
};

export const getUserCoworkers = async () => {
    const requestObj = {
        url: `${baseUrl}users/departments/coworkers`,
        method: "GET",
        token,
    };

    const userDepartment = await baseFetch.onlyAuth(requestObj);
    return userDepartment;
};

/* PATCH */
export const updateUserProfile = async (body) => {
    const requestObj = {
        url: `${baseUrl}users`,
        method: "PATCH",
        token,
        body,
    };

    const updatedUser = await baseFetch.bodyAndAuth(requestObj);
    return updatedUser;
};
