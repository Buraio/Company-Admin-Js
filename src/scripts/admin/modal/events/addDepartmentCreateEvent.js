import { selectCompany } from "../../companyFilter.js";
import { generateDepartmentCreateModalForm } from "../elements/departmentCreateForm.js";
import { enableModal } from "../enableModal.js";


export const addDepartmentCreateModalEvent = () => {
    const createDepartmentButton = document.querySelector(".newDepartment");
    setTimeout(() => {
        createDepartmentButton.addEventListener("click", () => {
            const formModal = generateDepartmentCreateModalForm();
            enableModal("Criar Departamento", formModal);

            const modalCompanySelect = document.querySelector("#modalSelect");

            selectCompany(modalCompanySelect);
        });
    }, 500);
};
