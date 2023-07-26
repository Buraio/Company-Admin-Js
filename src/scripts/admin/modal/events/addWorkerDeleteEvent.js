import { getAllUsers } from "../../../api/routes/user.routes.js";
import { departmentAndWorkerDeleteForm } from "../elements/departmentAndWorkerDeleteForm.js";
import { enableModal } from "../enableModal.js";

const userList = await getAllUsers();

export const addWorkerDeleteEvent = (element, userUuid) => {
    element.addEventListener("click", () => {
        const deleteModalContainer = departmentAndWorkerDeleteForm(
            "worker",
            userUuid
        );

        enableModal(null, deleteModalContainer);

        const userNameElem = document.querySelector(".nameSpan");

        userList.forEach((user) => {
            if (user.uuid === userUuid) {
                userNameElem.innerText = user.username;
            }
        });
    });
};
