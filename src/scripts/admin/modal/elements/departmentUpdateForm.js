import { updateDepartment } from "../../../api/routes/department.routes.js";

export const departmentUpdateForm = (departmentUuid) => {
    const updateModalContainer = document.createElement("div");
    const departmentDescription = document.createElement("textarea");
    const updateButton = document.createElement("button");

    departmentDescription.classList.add("departmentDesc");
    updateButton.classList.add("submitBtn", "blueBtn");

    departmentDescription.id = "descriptionTextarea";

    updateButton.innerText = "Salvar alterações";

    updateModalContainer.append(departmentDescription, updateButton);

    updateButton.addEventListener("click", async () => {
        const updateDepartmentData = {
            description: departmentDescription.value,
        };

        await updateDepartment(updateDepartmentData, departmentUuid);
    });

    return updateModalContainer;
};
