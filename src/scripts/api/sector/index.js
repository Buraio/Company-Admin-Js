import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();

export const getAllSectors = async () => {
    const requestObj = {
        url: `${baseUrl}sectors`,
        method: "GET",
    };

    const sectorArr = await baseFetch.noBodyAndNoAuth(requestObj);
    return sectorArr;
};
