import { pageHref } from "../homePage/index.js";
import { getUserInfo, userInfo } from "../../scripts/home/userInfo.js";
import { renderCoworkers } from "../../scripts/home/coworkers.js";
import { apiUserProfile } from "../../scripts/home/getApi.js";
import { getCoworkers } from "../../scripts/home/getApi.js";
import { validateToken } from "../../scripts/utils/validateToken.js";

const loggedUser     = await apiUserProfile();
const coworkersArray    = await getCoworkers();

validateToken();

redirectHeaderBtn(pageHref);

getUserInfo();

userInfo();

renderCoworkers();

export { loggedUser, coworkersArray };