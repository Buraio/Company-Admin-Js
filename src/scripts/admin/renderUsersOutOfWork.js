import { getAllUsersOutOfWork } from "../api/routes/admin.routes.js";

export const renderUsersOutOfWork = async (selectElem) => {
    const userList = await getAllUsersOutOfWork();

    userList.forEach((user) => {
        const userOption = document.createElement("option");

        userOption.innerText = user.username;
        userOption.value = user.uuid;

        selectElem.appendChild(userOption);
    });
};
