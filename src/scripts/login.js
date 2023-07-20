import { form, inputs } from "./register.js";
import { userLogin, validateUser } from "./api/auth/index.js";

export const userLoginAction = () => {
    const [email, password] = inputs;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const loginData = {};
        loginData.email = email.value;
        loginData.password = password.value;

        const accessToken = await userLogin(loginData);

        if (!accessToken.error) {
            localStorage.setItem("token", JSON.stringify(accessToken.token));

            const accountType = await validateUser(accessToken.token);

            if (accountType.is_admin === true) {
                location.replace("../adminPage/index.html");
            } else {
                location.replace("../userPage/index.html");
            }
        }
    });
};
