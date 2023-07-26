import { BaseFetch, baseUrl } from "../baseFetch.class.js";

const baseFetch = new BaseFetch();
const token = localStorage.getItem("token");

export const createDepartment = async (body) => {
    const requestObj = {
        url: `${baseUrl}departments`,
        method: "POST",
        token,
        body,
    };

    const createdDepartment = await baseFetch.bodyAndAuth(requestObj);
    return createdDepartment;
};

export const getAllDepartments = async () => {
    const requestObj = {
        url: `${baseUrl}departments`,
        method: "GET",
        token,
    };

    const departmentList = await baseFetch.onlyAuth(requestObj);
    return departmentList;
};

export const getDepartmentsByCompany = async (id) => {
    const requestObj = {
        url: `${baseUrl}departments/${id}`,
        method: "GET",
        token,
    };

    const departmentList = await baseFetch.onlyAuth(requestObj);
    return departmentList;
};

export const updateDepartment = async (body, id) => {
    const requestObj = {
        url: `${baseUrl}departments/${id}`,
        method: "PATCH",
        token,
        body,
    };

    const updatedDepartment = await baseFetch.bodyAndAuth(requestObj);
    return updatedDepartment;
};

export const hireWorker = async (body) => {
    const requestObj = {
        url: `${baseUrl}departments/hire`,
        method: "PATCH",
        token,
        body,
    };

    const hiredWorker = await baseFetch.bodyAndAuth(requestObj);
    return hiredWorker;
};

export const dismissWorker = async (id) => {
    const requestObj = {
        url: `${baseUrl}departments/dismiss/${id}`,
        method: "PATCH",
        token,
    };

    const message = await baseFetch.onlyAuth(requestObj);
    return message;
};

export const deleteDepartment = async (id) => {
    const requestObj = {
        url: `${baseUrl}departments/${id}`,
        method: "DELETE",
        token,
    };

    await baseFetch.onlyAuth(requestObj);
};