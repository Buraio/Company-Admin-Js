import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();

export const createDepartment = async (token, body) => {
    const requestObj = {
        url: `${baseUrl}departments`,
        method: "POST",
        token,
        body,
    };

    const createdDepartment = await baseFetch.bodyAndAuth(requestObj);
    return createdDepartment;
};

export const getAllDepartments = async (accessToken) => {
    const requestObj = {
        url: `${baseUrl}departments`,
        method: "GET",
        token: accessToken,
    };

    const departmentList = await baseFetch.onlyAuth(requestObj);
    return departmentList;
};

export const getDepartmentsByCompany = async (accessToken, id) => {
    const requestObj = {
        url: `${baseUrl}departments/${id}`,
        method: "GET",
        token: accessToken,
    };

    const departmentList = await baseFetch.onlyAuth(requestObj);
    return departmentList;
};

export const updateDepartment = async (accessToken, body, id) => {
    const requestObj = {
        url: `${baseUrl}departments/${id}`,
        method: "PATCH",
        token: accessToken,
        body,
    };

    const updatedDepartment = await baseFetch.bodyAndAuth(requestObj);
    return updatedDepartment;
};

export const deleteDepartment = async (accessToken, id) => {
    const requestObj = {
        url: `${baseUrl}departments/${id}`,
        method: "DELETE",
        token: accessToken,
    };

    await baseFetch.onlyAuth(requestObj);
};
