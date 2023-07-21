import { dynamicModal } from "../adminModal.js";
import { removeModal } from "../adminModal/createDepartment.js";
import {
    updateUserProfile,
} from "../api/user/index.js";

function userInfo() {
    const editUserInfoBtn = document.querySelector(".editInfoBtn");

    editUserInfoBtn.addEventListener("click", () => {
        const modalContainer = dynamicModal();
        editUserModal(modalContainer);

        const [userNameEditInput, emailEditInput, passwordEditInput] =
            document.querySelectorAll(".inputData");
        modalContainer.addEventListener("submit", (e) => {
            e.preventDefault();
            const userDataBody = {};
            userDataBody.username = userNameEditInput.value;
            userDataBody.email = emailEditInput.value;
            userDataBody.password = `${passwordEditInput.value}`;

            updateUserProfile(userDataBody);

            removeModal(modalContainer);
        });
    });
}

const editUserModal = (container) => {
    const modalHeading = document.createElement("h3");
    const updateNameInput = document.createElement("input");
    const updateEmailInput = document.createElement("input");
    const updatePasswordInput = document.createElement("input");
    const submitDataBtn = document.createElement("button");

    modalHeading.classList.add("modalHeading");
    updateNameInput.classList.add("inputData");
    updateEmailInput.classList.add("inputData");
    updatePasswordInput.classList.add("inputData");
    submitDataBtn.classList.add("submitBtn", "blueBtn");

    modalHeading.innerText = "Editar Perfil";
    updateNameInput.placeholder = "Seu nome";
    updateEmailInput.placeholder = "Seu e-mail";
    updatePasswordInput.placeholder = "Sua senha";
    submitDataBtn.innerText = "Salvar alterações";

    updateEmailInput.type = "email";
    updatePasswordInput.type = "password";

    updateEmailInput.required = true;
    updatePasswordInput.required = true;

    container.append(
        modalHeading,
        updateNameInput,
        updateEmailInput,
        updatePasswordInput,
        submitDataBtn
    );
};



export { userInfo };
