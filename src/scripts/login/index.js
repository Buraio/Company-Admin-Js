import { userLogin, validateUser } from "../api/auth/index.js";

const form = document.querySelector(".formContainer");
const inputs = document.querySelectorAll(".inputData");

export const userLoginAction = () => {
    const [email, password] = inputs;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const loginData = {};
        loginData.email = email.value;
        loginData.password = password.value;

        const accessToken = await userLogin(loginData);

        if (!accessToken.error) {
            localStorage.setItem("token", accessToken.token);

            const accountType = await validateUser(accessToken.token);

            if (accountType.is_admin === true) {
                location.replace("../admin/index.html");
            } else {
                location.replace("../user/index.html");
            }
        }
    });
};
