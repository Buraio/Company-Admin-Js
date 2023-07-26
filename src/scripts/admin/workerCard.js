import { addWorkerDeleteEvent } from "./modal/events/addWorkerDeleteEvent.js";
import { addUserUpdateEvent } from "./modal/events/addWorkerUpdateEvent.js";

export const workerCard = (workerObj) => {
    if (!workerObj.is_admin) {
        const { uuid, username, professional_level } = workerObj;

        const userCard = document.createElement("li");
        const userName = document.createElement("h3");
        const userExpLevel = document.createElement("p");
        const companyName = document.createElement("p");
        const actionDiv = document.createElement("div");
        const pencilIcon = document.createElement("img");
        const trashIcon = document.createElement("img");

        userCard.classList.add("user");
        userName.classList.add("userName");
        userExpLevel.classList.add("userExp");
        companyName.classList.add("companyName");
        actionDiv.classList.add("actionsDiv");
        pencilIcon.classList.add("action", "editUser");
        trashIcon.classList.add("action", "deleteUser");

        userName.innerText = username;
        userExpLevel.innerText = professional_level;

        pencilIcon.src = "../../assets/icons/blackPencilIcon.svg";
        trashIcon.src = "../../assets/icons/trashbinIcon.svg";

        actionDiv.append(pencilIcon, trashIcon);
        userCard.append(userName, userExpLevel, companyName, actionDiv);

        addUserUpdateEvent(pencilIcon, uuid);
        addWorkerDeleteEvent(trashIcon, uuid);

        return userCard;
    }
    return;
};
