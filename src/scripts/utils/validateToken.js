export const validateToken = () => {
    const accessToken = localStorage.getItem("token");

    if (!accessToken) {
        location.replace("../../../index.html");
    }
};
