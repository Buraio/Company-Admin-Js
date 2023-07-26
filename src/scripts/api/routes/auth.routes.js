import { BaseFetch, baseUrl } from "../baseFetch.class.js";

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

export const userLogin = async (body) => {
    const requestObj = {
        url: `${baseUrl}auth/login`,
        method: "POST",
        body: body,
    };

    const accessToken = await baseFetch.bodyAndNoAuth(requestObj);
    return accessToken;
};

export const validateUser = async (token) => {
    const requestObj = {
        url: `${baseUrl}auth/validate_user`,
        method: "GET",
        token,
    };

    const validatedUser = await baseFetch.onlyAuth(requestObj);
    return validatedUser;
};
