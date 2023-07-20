export const validateToken = () => {
    const accessToken = JSON.parse(localStorage.getItem("token"));

    if (!accessToken) {
        location.replace("../../../index.html");
    }
    return accessToken;
};
