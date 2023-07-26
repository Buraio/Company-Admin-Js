import { userUpdateForm } from "../elements/userUpdateForm.js";
import { enableModal } from "../../../admin/modal/enableModal.js";

export const addUserUpdateEvent = () => {
    const editUserInfoBtn = document.querySelector(".editInfoBtn");

    editUserInfoBtn.addEventListener("click", () => {
        const updateModalContainer = userUpdateForm();

        enableModal("Editar Perfil", updateModalContainer);
    });
};
