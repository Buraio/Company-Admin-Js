import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();

export const createCompany = async (accessToken, body) => {
    const requestObj = {
        url: `${baseUrl}companies`,
        method: "POST",
        token: accessToken,
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

export const getAllSectors = async () => {
    const requestObj = {
        url: `${baseUrl}sectors`,
        method: "GET",
    };

    const sectorArr = await baseFetch.noBodyAndNoAuth(requestObj);
    return sectorArr;
};

export const getCompaniesBySector = async (sectorStr) => {
    const requestObj = {
        url: `${baseUrl}companies/${sectorStr}`,
        method: "GET",
    };

    const companyArr = await baseFetch.noBodyAndNoAuth(requestObj);
    return companyArr;
};
