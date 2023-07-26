import { BaseFetch, baseUrl } from "../baseFetch.class.js";

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

export const updateUserProfile = async (body, id) => {
    const requestObj = {
        url: `${baseUrl}admin/update_user/${id}`,
        method: "PATCH",
        token,
        body,
    };

    const updatedUser = await baseFetch.bodyAndAuth(requestObj);
    return updatedUser;
};

export const deleteUser = async (id) => {
    const requestObj = {
        url: `${baseUrl}admin/delete_user/${id}`,
        method: "DELETE",
        token,
    };

    await baseFetch.onlyAuth(requestObj);
};
