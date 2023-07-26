import { dismissWorker } from "../api/routes/department.routes.js";

export const departmentWorkerCard = async (parent, obj) => {
    const { uuid, username, professional_level } = obj;

    const userCard = document.createElement("li");
    const userName = document.createElement("h3");
    const expLevel = document.createElement("p");
    const userCompany = document.createElement("p");
    const dismissBtn = document.createElement("button");

    dismissBtn.classList.add("submitBtn", "redBtn");

    userName.innerText = username;
    expLevel.innerText = professional_level;
    dismissBtn.innerText = "Desligar";

    dismissBtn.type = "button";

    userCard.append(userName, expLevel, userCompany, dismissBtn);

    parent.appendChild(userCard);

    dismissBtn.addEventListener("click", async () => {
        await dismissWorker(uuid);
    });
};
