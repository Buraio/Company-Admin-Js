import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();
const token = localStorage.getItem("token");

export const createCompany = async (body) => {
    const requestObj = {
        url: `${baseUrl}companies`,
        method: "POST",
        token,
        body,
    };

    const createdCompany = await baseFetch.bodyAndAuth(requestObj);
    return createdCompany;
};

export const getAllCompanies = async () => {
    const requestObj = {
        url: `${baseUrl}companies`,
        method: "GET",
    };

    const companyArr = await baseFetch.noBodyAndNoAuth(requestObj);
    return companyArr;
};

export const getCompaniesBySector = async (sectorStr) => {
    const requestObj = {
        url: `${baseUrl}companies/${sectorStr}`,
        method: "GET",
    };

    const companyArr = await baseFetch.noBodyAndNoAuth(requestObj);
    return companyArr;
};
