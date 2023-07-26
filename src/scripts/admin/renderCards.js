import { departmentCard } from "./departmentCard.js";
import { workerCard } from "./workerCard.js";
import { getAllDepartments } from "../api/routes/department.routes.js";
import { getAllUsers } from "../api/routes/user.routes.js";

const userListElem = document.querySelector("#userList");
const departmentListElem = document.querySelector("#departments");
const userList = await getAllUsers();
const departmentList = await getAllDepartments();

export const renderCards = (element, list, callback) => {
    element.innerHTML = "";
    list.forEach((item) => {
        const card = callback(item);
        if (card) element.append(card);
    });
};

export const renderUserAndDepartmentCards = () => {
    renderCards(userListElem, userList, workerCard);
    renderCards(departmentListElem, departmentList, departmentCard);
};
