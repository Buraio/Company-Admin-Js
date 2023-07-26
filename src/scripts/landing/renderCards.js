import { getAllCompanies } from "../api/routes/company.routes.js";
import { companyCard } from "./companyCard.js";

const companyListElem = document.querySelector(".companyList");
const companyArr = await getAllCompanies();

export const renderCards = () => {
    companyListElem.innerHTML = "";

    companyArr.forEach((company) => {
        const card = companyCard(company);
        companyListElem.appendChild(card);
    });
};

export const renderFilteredCards = (arr) => {
    companyListElem.innerHTML = "";

    arr.forEach((company) => {
        const card = companyCard(company);
        companyListElem.appendChild(card);
    });
};
