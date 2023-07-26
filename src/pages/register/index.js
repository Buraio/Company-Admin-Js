import { registerUserAction as registerUser } from "../../scripts/register/registerAction.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

headerRedirect();
registerUser();