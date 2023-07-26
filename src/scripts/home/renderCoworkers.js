import {
    getAuthenticatedUserDepartment,
    getUserCoworkers,
} from "../api/user/index.js";
import { createCoworkerCard } from "./coworkerCard.js";

const userCompanyElem = document.querySelector(".companyHeader");
const coworkerList = document.querySelector("#coworkerList");
const currentDepartment = getAuthenticatedUserDepartment();
const userCoworkerList = getUserCoworkers();

export const renderCoworkers = () => {
    if (!currentDepartment.error && userCoworkerList.length > 0) {
        const departmentUuid = currentDepartment.uuid;

        userCoworkerList.users.forEach((department) => {
            if (departmentUuid === department.uuid) {
                userCompanyElem.innerText = `${currentDepartment.name} - ${department.name}`;

                department.users.forEach((user) => {
                    const coworkerCard = createCoworkerCard(user);
                    coworkerList.appendChild(coworkerCard);
                });
            }
        });
    }
};
