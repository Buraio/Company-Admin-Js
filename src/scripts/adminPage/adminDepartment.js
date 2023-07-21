import { renderDepartmentCards } from "./getAccount.js";
import { crudCallFunction } from "../adminModal.js";
import { getAllCompanies } from "../api/company/index.js";
import { getDepartmentsByCompany } from "../api/department/index.js";

const accessToken = localStorage.getItem("token");

export const selectCompany = async (input) => {
    const companyList = await getAllCompanies();

    companyList.forEach((company) => {
        const sectorOption = document.createElement("option");
        sectorOption.innerText = company.name;
        sectorOption.value = company.uuid;

        input.appendChild(sectorOption);
    });
    filterDepartmentByCompany(input, companyList);
};

const filterDepartmentByCompany = (input) => {
    input.addEventListener("change", async () => {
        const companyId = input.value;
        const filterArr = await getDepartmentsByCompany(accessToken, companyId);

        if (filterArr) {
            renderDepartmentCards(filterArr);
            crudCallFunction();
        }
    });
};

export { filterDepartmentByCompany };
