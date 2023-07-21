import { getUserData } from "../../scripts/adminPage/getAccount.js";
import { updateUser } from "../../scripts/adminModal/editUser.js";
import { crudCallFunction } from "../../scripts/adminModal.js";
import { selectCompany } from "../../scripts/adminPage/adminDepartment.js";
import { deleteUser } from "../../scripts/adminModal/deleteUser.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";
import { validateToken } from "../../scripts/utils/validateToken.js";

validateToken();

headerRedirect();

selectCompany();

getUserData();

crudCallFunction();

updateUser();

deleteUser();
