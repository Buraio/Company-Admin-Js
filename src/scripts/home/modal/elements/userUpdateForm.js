export const userUpdateForm = () => {
    const modalForm = document.createElement("form");
    const nameInput = document.createElement("input");
    const emailInput = document.createElement("input");
    const passwordInput = document.createElement("input");
    const updateUserButton = document.createElement("button");

    nameInput.classList.add("inputData");
    emailInput.classList.add("inputData");
    passwordInput.classList.add("inputData");
    updateUserButton.classList.add("submitBtn", "blueBtn");

    nameInput.placeholder = "Seu nome";
    emailInput.placeholder = "Seu e-mail";
    passwordInput.placeholder = "Sua senha";
    updateUserButton.innerText = "Salvar alterações";

    emailInput.type = "email";
    passwordInput.type = "password";
    updateUserButton.type = "submit";

    emailInput.required = true;
    passwordInput.required = true;

    modalForm.append(nameInput, emailInput, passwordInput, updateUserButton);

    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const userUpdateData = {
            username: nameInput.value,
            email: emailInput.value,
            password: `${passwordInput.value}`,
        };

        updateOwnUserProfile(userUpdateData);
    });

    return modalForm;
};
