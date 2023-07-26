import { renderCoworkers } from "../../scripts/home/renderCoworkers.js";
import { validateToken } from "../../scripts/utils/validateToken.js";
import { enableHeaderRedirect as headerRedirect } from "../../scripts/utils/headerRedirect.js";
import { createUserInfoCard as userInfoCard } from "../../scripts/home/userInfoCard.js";
import { insertBaseModal } from "../../scripts/admin/modal/baseModal.js";

insertBaseModal();

validateToken();

headerRedirect();

userInfoCard();

renderCoworkers();
