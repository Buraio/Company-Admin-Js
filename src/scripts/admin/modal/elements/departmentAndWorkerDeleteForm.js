import { deleteUser } from "../../../api/routes/admin.routes.js";
import { deleteDepartment } from "../../../api/routes/department.routes.js";

export const departmentAndWorkerDeleteForm = (type, uuid) => {
    const warningHeading = document.querySelector(".mainHeading");

    const deleteModalContainer = document.createElement("div");
    const removeButton = document.createElement("button");

    warningHeading.classList.add("modalHeading", "deleteHeading");
    removeButton.classList.add("submitBtn", "greenBtn");

    const typeIsDepartment = type === "department";
    const typeIsWorker = type === "worker";

    let warningText = "";

    if (typeIsDepartment) {
        warningText = `Deseja realmente deletar o departamento <span class="nameSpan">NOME</span> e deletar seus funcionários?`;
    } else if (typeIsWorker) {
        warningText = `Deseja realmente remover o usuário <span class="nameSpan">NOME</span>?`;
    }

    warningHeading.innerHTML = "";
    warningHeading.insertAdjacentHTML("beforeend", warningText);
    removeButton.innerText = "Remover";

    deleteModalContainer.append(removeButton);

    removeButton.addEventListener("click", async () => {
        if (typeIsDepartment) {
            deleteDepartment(uuid);
        } else if (typeIsWorker) {
            deleteUser(uuid);
        }
    });

    return deleteModalContainer;
};
