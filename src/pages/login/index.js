import { userLoginAction } from '../../scripts/login.js';
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";

headerRedirect();
userLoginAction();