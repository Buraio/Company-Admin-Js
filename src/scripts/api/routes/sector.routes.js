import { BaseFetch, baseUrl } from "../baseFetch.class.js";

const baseFetch = new BaseFetch();

export const getAllSectors = async () => {
    const requestObj = {
        url: `${baseUrl}sectors`,
        method: "GET",
    };

    const sectorArr = await baseFetch.noBodyAndNoAuth(requestObj);
    return sectorArr;
};
