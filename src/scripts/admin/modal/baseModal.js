export const insertBaseModal = () => {
    const modalBackground = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalHeaderElem = document.createElement("div");
    const modalContentElem = document.createElement("div");
    const mainHeadingElem = document.createElement("h2");
    const closeModalBtn = document.createElement("button");
    const closeModalImg = document.createElement("img");

    modalBackground.classList.add("divBack", "hidden");
    modalContainer.classList.add("divContainer");
    modalHeaderElem.classList.add("modal-header");
    modalContentElem.classList.add("modal-content");
    mainHeadingElem.classList.add("mainHeading");
    closeModalImg.classList.add("closeModal");

    closeModalImg.src = "../../assets/icons/xIcon.svg";

    closeModalBtn.appendChild(closeModalImg);
    modalHeaderElem.append(mainHeadingElem, closeModalBtn);
    modalContainer.append(modalHeaderElem, modalContentElem);
    modalBackground.appendChild(modalContainer);

    closeModalBtn.addEventListener("click", () => {
        modalContentElem.innerHTML = "";
        modalBackground.classList.add("hidden");

        document.body.classList.remove("noScroll");
    });

    document.body.appendChild(modalBackground);
};
