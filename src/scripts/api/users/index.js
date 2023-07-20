import { BaseFetch } from "../index.js";

const baseFetch = new BaseFetch();

export const registerUser = async (body) => {
    const requestObj = {
        url: `${baseUrl}auth/register`,
        method: "POST",
        body: body,
    };

    const createdUser = await baseFetch.bodyAndNoAuth(requestObj);
    return createdUser;
};
