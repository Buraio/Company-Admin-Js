import { renderDepartmentCards } from "./getAccount.js";
import { crudCallFunction } from "../adminModal.js";
import { getAllCompanies } from "../api/company/index.js";
import { getDepartmentsByCompany } from "../api/department/index.js";

const adminCompanySelect = document.querySelector("#adminCompanySelect");
const companyList = await getAllCompanies();

export const selectCompany = async () => {

    companyList.forEach((company) => {
        const sectorOption = document.createElement("option");
        sectorOption.innerText = company.name;
        sectorOption.value = company.uuid;

        adminCompanySelect.appendChild(sectorOption);
    });

    filterDepartmentByCompany(companyList);
};

const filterDepartmentByCompany = () => {
    adminCompanySelect.addEventListener("change", async () => {
        const companyId = adminCompanySelect.value;
        const filterArr = await getDepartmentsByCompany(companyId);

        if (filterArr) {
            renderDepartmentCards(filterArr);
            crudCallFunction();
        }
    });
};

export { filterDepartmentByCompany };
