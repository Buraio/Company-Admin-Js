import { registerUser } from "../../scripts/register.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

headerRedirect();
registerUser();