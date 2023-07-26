import { renderUserAndDepartmentCards } from "../../scripts/admin/renderCards.js";

import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";
import { validateToken } from "../../scripts/utils/validateToken.js";
import { insertBaseModal } from "../../scripts/admin/modal/baseModal.js";
import { addDepartmentCreateModalEvent } from "../../scripts/admin/modal/events/addDepartmentCreateEvent.js";
import { selectCompany } from "../../scripts/admin/companyFilter.js";

validateToken();

insertBaseModal();

addDepartmentCreateModalEvent();

headerRedirect();

selectCompany();

renderUserAndDepartmentCards();
