import { getAllCompanies } from "../api/routes/company.routes.js";
import { getDepartmentsByCompany } from "../api/routes/department.routes.js";
import { renderCards } from "./renderCards.js";
import { departmentCard } from "./departmentCard.js";

const companySelect = document.querySelector("#adminCompanySelect");
const departmentListElem = document.querySelector("#departments");
const companyList = await getAllCompanies();

export const selectCompany = async () => {
    companyList.forEach((company) => {
        const sectorOption = document.createElement("option");
        sectorOption.innerText = company.name;
        sectorOption.value = company.uuid;

        companySelect.appendChild(sectorOption);
    });

    filterDepartmentByCompany(companyList);
};

export const filterDepartmentByCompany = () => {
    companySelect.addEventListener("change", async () => {
        const companyId = companySelect.value;
        const filterArr = await getDepartmentsByCompany(companyId);

        if (filterArr) {
            renderCards(departmentListElem, filterArr, departmentCard);
        }
    });
};
