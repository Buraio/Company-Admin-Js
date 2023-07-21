import { getUserData } from "../../scripts/adminPage/getAccount.js";
import { updateUser } from "../../scripts/adminModal/editUser.js";
import { crudCallFunction } from "../../scripts/adminModal.js";
import { selectCompany } from "../../scripts/adminPage/adminDepartment.js";
import { deleteUser } from "../../scripts/adminModal/deleteUser.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";
import { validateToken } from "../../scripts/utils/validateToken.js";

const adminCompanySelect = document.querySelector("#adminCompanySelect");
const userList = document.querySelector("#userList");
const departmentList = document.querySelector("#departments");

validateToken();

headerRedirect();

selectCompany(adminCompanySelect);

getUserData();

crudCallFunction();

updateUser();

deleteUser();

export { adminCompanySelect, userList, departmentList };
