import { registerUserAction as registerUser } from "../../scripts/register/index.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

headerRedirect();
registerUser();