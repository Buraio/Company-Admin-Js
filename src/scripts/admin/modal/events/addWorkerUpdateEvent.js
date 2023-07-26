import { userUpdateForm } from "../elements/userUpdateForm.js";
import { enableModal } from "../enableModal.js";

export const addUserUpdateEvent = (element, userUuid) => {
    element.addEventListener("click", () => {
        const modalForm = userUpdateForm(userUuid);

        enableModal("Editar Usuário", modalForm);
    });
};
