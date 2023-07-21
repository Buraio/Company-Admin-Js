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

        const userAccess = await userLogin(loginData);

        if (!userAccess.error) {
            localStorage.setItem("token", userAccess.token);

            setTimeout(async () => {
                const accountType = await validateUser(userAccess.token);

                if (accountType.is_admin === true) {
                    location.replace("../admin/index.html");
                } else {
                    location.replace("../home/index.html");
                }
            }, 300);
        }
    });
};
