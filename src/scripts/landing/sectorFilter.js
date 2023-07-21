import {
    getAllCompanies,
    getAllSectors,
    getCompaniesBySector,
} from "../api/company/index.js";
import { renderCards, renderFilteredCards } from "./renderCards.js";

const selectInput = document.querySelector("#sectorSelect");
const companyArr = await getAllCompanies();
const sectorArr = await getAllSectors();

export const enableSectorFilter = async () => {
    sectorArr.forEach((sector) => {
        const sectorOption = document.createElement("option");
        sectorOption.innerText = sector.description;

        selectInput.appendChild(sectorOption);
    });

    selectInput.addEventListener("change", async (e) => {
        const selectValue = e.target.value;

        if (selectValue === "") {
            renderCards(companyArr);
        } else {
            const filteredCompanyArr = await getCompaniesBySector(selectValue);
            renderFilteredCards(filteredCompanyArr);
        }
    });
};
