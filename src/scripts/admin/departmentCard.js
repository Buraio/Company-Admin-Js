import { addDepartmentDeleteEvent } from "./modal/events/addDepartmentDeleteEvent.js";
import { addDepartmentReadModalEvent } from "./modal/events/addDepartmentReadEvent.js";
import { addDepartmentUpdateModalEvent } from "./modal/events/addDepartmentUpdateEvent.js";

export const departmentCard = (departmentObj) => {
    const { uuid, name, description, companies } = departmentObj;

    const item = document.createElement("li");
    const departmentName = document.createElement("h3");
    const departmentDesc = document.createElement("p");
    const companyName = document.createElement("p");
    const actionElem = document.createElement("div");
    const eyeIcon = document.createElement("img");
    const pencilIcon = document.createElement("img");
    const trashIcon = document.createElement("img");

    item.classList.add("department");
    departmentName.classList.add("departmentName");
    departmentDesc.classList.add("departmentDesc");
    companyName.classList.add("companyName");
    actionElem.classList.add("actionsDiv");
    eyeIcon.classList.add("action", "visualize");
    pencilIcon.classList.add("action", "editDepartment");
    trashIcon.classList.add("action", "deleteDepartment");

    departmentName.innerText = name;
    departmentDesc.innerText = description;
    companyName.innerText = companies.name;

    eyeIcon.src = "../../assets/icons/eyeIcon.svg";
    pencilIcon.src = "../../assets/icons/blackPencilIcon.svg";
    trashIcon.src = "../../assets/icons/trashbinIcon.svg";

    actionElem.append(eyeIcon, pencilIcon, trashIcon);
    item.append(departmentName, departmentDesc, companyName, actionElem);

    addDepartmentReadModalEvent(eyeIcon, uuid);
    addDepartmentUpdateModalEvent(pencilIcon, uuid);
    addDepartmentDeleteEvent(trashIcon, uuid);

    return item;
};
