import { getAllDepartments } from "../../../api/routes/department.routes.js";
import { departmentUpdateForm } from "../elements/departmentUpdateForm.js";
import { enableModal } from "../enableModal.js";

const departmentList = await getAllDepartments();

export const addDepartmentUpdateModalEvent = async (
    element,
    departmentUuid
) => {
    element.addEventListener("click", async () => {
        const updateModalContainer = departmentUpdateForm(departmentUuid);

        enableModal("Editar Departamento", updateModalContainer);

        const textarea = document.querySelector("#descriptionTextarea");

        departmentList.forEach((department) => {
            if (department.uuid === departmentUuid) {
                textarea.innerText = department.description;
            }
        });
    });
};
