import { BaseFetch, baseUrl } from "../index.js";

const baseFetch = new BaseFetch();

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
        token: token,
    };

    const validatedUser = await baseFetch.onlyAuth(requestObj);
    return validatedUser;
};
