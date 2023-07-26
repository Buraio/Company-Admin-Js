import { updateUserProfile } from "../../../api/routes/admin.routes.js";

export function userUpdateForm(userUuid) {
    const updateForm = document.createElement("form");
    const workTypeSelect = document.createElement("select");
    const experienceLevelSelect = document.createElement("select");
    const updateButton = document.createElement("button");

    workTypeSelect.classList.add("inputData");
    experienceLevelSelect.classList.add("inputData");
    updateButton.classList.add("submitBtn", "blueBtn");

    workTypeSelect.id = "typeSelect";
    experienceLevelSelect.id = "expLevelSelect";

    updateButton.innerText = "Salvar";

    workTypeSelect.insertAdjacentHTML(
        "beforeend",
        `
            <option value="" selected>Selecionar modalidade de trabalho</option>
            <option value="presencial">Presencial</option>
            <option value="home office">Home-Office</option>
            <option value="hibrido">Híbrido</option>
        `
    );

    experienceLevelSelect.insertAdjacentHTML(
        "beforeend",
        `
            <option value="" selected>Nível Profissional</option>
            <option value="estágio">Estágio</option>
            <option value="júnior">Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="sênior">Sênior</option>
        `
    );

    updateForm.append(workTypeSelect, experienceLevelSelect, updateButton);

    updateForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const userData = {
            kind_of_work: workTypeSelect.value,
            professional_level: experienceLevelSelect.value,
        };

        await updateUserProfile(userData, userUuid);
    });

    return updateForm;
}
