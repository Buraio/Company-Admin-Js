export const enableModal = (heading, element) => {
    const modalBackground = document.querySelector(".divBack");
    const modalContentElem = document.querySelector(".modal-content");
    const modalHeading = document.querySelector(".mainHeading");

    if (heading) {
        modalHeading.innerText = heading;
    }

    modalContentElem.appendChild(element);
    modalBackground.classList.remove("hidden");
    document.body.classList.add("noScroll");
};
