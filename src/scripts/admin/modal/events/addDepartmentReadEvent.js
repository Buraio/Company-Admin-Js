import { departmentWorkerCard } from "../../departmentWorkerCard.js";
import { getAllDepartments } from "../../../api/routes/department.routes.js";
import { getAllUsers } from "../../../api/routes/user.routes.js";
import { generateDepartmentReadModalForm } from "../elements/departmentReadForm.js";
import { enableModal } from "../enableModal.js";
import { renderUsersOutOfWork } from "../../renderUsersOutOfWork.js";

const departmentArray = await getAllDepartments();
const userList = await getAllUsers();

export const addDepartmentReadModalEvent = (element, departmentUuid) => {
    element.addEventListener("click", async () => {
        const formModal = generateDepartmentReadModalForm(departmentUuid);

        enableModal(null, formModal);

        departmentArray.forEach((department) => {
            if (department.uuid === departmentUuid) {
                const modalHeading = document.querySelector(".mainHeading");
                const modalDesc = document.querySelector(".modalDesc");
                const modalCompanyName =
                    document.querySelector(".modalCompanyName");

                modalHeading.innerText = department.name;
                modalDesc.innerText = department.description;
                modalCompanyName.innerText = department.companies.name;
            }
        });

        const userSelect = document.querySelector("#userSelect");

        renderUsersOutOfWork(userSelect);

        const userListElem = document.querySelector("#modalUserList");

        userList.forEach((user) => {
            if (user.department_uuid) {
                if (user.department_uuid === departmentUuid) {
                    departmentWorkerCard(userListElem, user);
                }
            }
        });
    });
};
