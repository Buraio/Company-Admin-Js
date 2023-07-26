import { createDepartment } from "../../../api/routes/department.routes.js";

export const generateDepartmentCreateModalForm = () => {
    const modalForm = document.createElement("form");
    const departmentNameInput = document.createElement("input");
    const departmentDescriptionInput = document.createElement("input");
    const departmentCompanyInput = document.createElement("select");
    const submitButton = document.createElement("button");
    const noValueOpt = document.createElement("option");

    modalForm.classList.add("modal-form");
    departmentNameInput.classList.add("inputData");
    departmentDescriptionInput.classList.add("inputData");
    departmentCompanyInput.classList.add("inputData");
    submitButton.classList.add("submitBtn", "blueBtn");

    departmentNameInput.id = "departmentName";
    departmentDescriptionInput.id = "departmentDesc";
    departmentCompanyInput.id = "modalSelect";

    departmentNameInput.placeholder = "Nome do departamento";
    departmentDescriptionInput.placeholder = "Descrição";
    noValueOpt.innerText = "selecionar empresa";
    submitButton.innerText = "Criar departamento";

    noValueOpt.selected = true;

    departmentCompanyInput.appendChild(noValueOpt);
    modalForm.append(
        departmentNameInput,
        departmentDescriptionInput,
        departmentCompanyInput,
        submitButton
    );

    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const departmentName = document.querySelector("#departmentName");
        const departmentDesc = document.querySelector("#departmentDesc");
        const companySelect = modalForm.querySelector("#modalSelect");

        const userData = {
            name: `${departmentName.value}`,
            description: `${departmentDesc.value}`,
            company_uuid: `${companySelect.value}`,
        };

        createDepartment(userData);
    });

    return modalForm;
};
