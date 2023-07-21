import { createDepartmentAction } from "./adminModal/createDepartment.js";
import { deleteDepartment } from "./adminModal/deleteDepartment.js";
import { updateDepartment } from "./adminModal/editDepartment.js";
import { readDepartment } from "./adminModal/readDepartment.js";

async function crudCallFunction() {
    createDepartmentAction();
    readDepartment();
    updateDepartment();
    deleteDepartment();
}

const dynamicModal = (heading) => {
    const modalBackground = document.querySelector(".divBack");
    const modalContainer = document.createElement("div");
    const modalContentElem = document.createElement("form");
    const closeModalBtn = document.createElement("button");
    const closeModalImg = document.createElement("img");

    modalBackground.classList.remove("hidden");
    modalBackground.classList.add("show");
    modalContainer.classList.add("divContainer");
    closeModalImg.classList.add("closeModal");

    document.body.classList.add("noScroll");

    closeModalImg.src = "../../assets/icons/xIcon.svg";

    modalContainer.appendChild(closeModalImg);
    modalBackground.appendChild(modalContainer);

    closeModalImg.addEventListener("click", () => {
        modalContainer.remove();
        modalBackground.classList.add("hidden");
        modalBackground.classList.remove("show");

        document.body.classList.remove("noScroll");
    });

    return modalContainer;
};

export { dynamicModal, crudCallFunction };
