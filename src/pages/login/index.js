import { userLoginAction as userLogin } from "../../scripts/login/loginAction.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

headerRedirect();
userLogin();
