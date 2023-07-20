import { registerUser } from "./api/users/index.js";

const form = document.querySelector(".formContainer");
const inputs = document.querySelectorAll(".inputData");

const registerUserAction = () => {
    const [name, email, password, expLevel] = inputs;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const registerData = {};

        registerData.username = name.value;
        registerData.password = password.value;
        registerData.email = email.value;
        registerData.professional_level = expLevel.value;

        const registeredUser = await registerUser(registerData);

        if (!registeredUser.error) {
            location.replace("../login/index.html");
        }
    });
};

export { form, inputs, registerUserAction as registerUser };
