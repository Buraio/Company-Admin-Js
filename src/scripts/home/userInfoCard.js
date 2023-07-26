import { getUserInfo } from "../api/routes/user.routes.js";
import { addUserUpdateEvent } from "./modal/events/addUserUpdateEvent.js";

const userNameElem = document.querySelector(".userName");
const userEmailElem = document.querySelector(".userEmail");
const userExperienceElem = document.querySelector(".userExp");
const userWorkingTypeElem = document.querySelector(".workingType");

const userProfileInfo = await getUserInfo();

export const createUserInfoCard = () => {
    const { username, email, professional_level, kind_of_work } =
        userProfileInfo;

    userNameElem.innerText = username;
    userEmailElem.innerText = email;

    const experienceIsTrue = !!professional_level;
    const workingTypeIsTrue = !!kind_of_work;

    if (experienceIsTrue) {
        userExperienceElem.innerText = professional_level;
    }
    if (workingTypeIsTrue) {
        userWorkingTypeElem.innerText = kind_of_work;
    }

    addUserUpdateEvent();
};
