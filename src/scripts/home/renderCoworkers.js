import {
    getAuthenticatedUserDepartment,
    getUserCoworkers,
} from "../api/routes/user.routes.js";
import { createCoworkerCard } from "./coworkerCard.js";

const userCompanyElem = document.querySelector(".companyHeader");
const coworkerList = document.querySelector("#coworkerList");
const companyObj = await getAuthenticatedUserDepartment();
const userCoworkerList = await getUserCoworkers();

export const renderCoworkers = () => {
    if (!companyObj.error && userCoworkerList.length > 0) {
        const department = userCoworkerList[0];

        department.users.forEach((user) => {
            userCompanyElem.innerText = `${companyObj.name} - ${department.name}`;

            const coworkerCard = createCoworkerCard(user);
            coworkerList.appendChild(coworkerCard);
        });
    }
};
