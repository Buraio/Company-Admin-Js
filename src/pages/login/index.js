import { userLoginAction as userLogin } from "../../scripts/login/index.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

headerRedirect();
userLogin();
