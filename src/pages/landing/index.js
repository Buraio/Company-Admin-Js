import { renderCards } from "../../scripts/landing/renderCards.js";
import { enableSectorFilter as sectorFilter } from "../../scripts/landing/sectorFilter.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

const pageHref = {
    login: "./src/pages/login/index.html",
    register: "./src/pages/register/index.html",
};

headerRedirect(pageHref);

renderCards();
sectorFilter();
