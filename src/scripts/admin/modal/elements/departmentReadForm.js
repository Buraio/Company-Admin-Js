import { hireWorker } from "../../../api/routes/department.routes.js";

export const generateDepartmentReadModalForm = (departmentUuid) => {
    const modalForm = document.createElement("form");
    const infoDiv = document.createElement("div");
    const departmentDesc = document.createElement("p");
    const companyName = document.createElement("p");
    const inputDiv = document.createElement("div");
    const userSelect = document.createElement("select");
    const noValueOpt = document.createElement("option");
    const hireBtn = document.createElement("button");
    const userList = document.createElement("ul");

    modalForm.classList.add("modal-form");
    infoDiv.classList.add("infoDiv");
    departmentDesc.classList.add("modalDesc");
    companyName.classList.add("modalCompanyName");
    inputDiv.classList.add("inputDiv");
    userSelect.classList.add("inputData");
    hireBtn.classList.add("submitBtn", "greenBtn");

    userSelect.id = "userSelect";
    userList.id = "modalUserList";

    noValueOpt.innerText = "Selecionar usuário";
    hireBtn.innerText = "Contratar";

    hireBtn.type = "submit";

    infoDiv.append(departmentDesc, companyName);
    userSelect.appendChild(noValueOpt);
    inputDiv.append(userSelect, hireBtn);

    modalForm.append(infoDiv, inputDiv, userSelect, userList);

    modalForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const workerObj = {
            user_uuid: userSelect.value,
            department_uuid: departmentUuid,
        };

        hireWorker(workerObj);
    });

    return modalForm;
};
