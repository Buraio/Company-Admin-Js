import { getAllDepartments } from "../../../api/routes/department.routes.js";
import { departmentAndWorkerDeleteForm } from "../elements/departmentAndWorkerDeleteForm.js";
import { enableModal } from "../enableModal.js";

const departmentList = await getAllDepartments();

export const addDepartmentDeleteEvent = (element, departmentUuid) => {
    element.addEventListener("click", async () => {
        const deleteModalContainer = departmentAndWorkerDeleteForm(
            "department",
            departmentUuid
        );

        enableModal(null, deleteModalContainer);

        const departmentName = document.querySelector(".nameSpan");

        departmentList.forEach((department) => {
            if (department.uuid === departmentUuid) {
                departmentName.innerText = department.name;
            }
        });
    });
};
