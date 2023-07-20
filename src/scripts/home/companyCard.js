export const companyCard = ({ name, opening_hours, sectors }) => {
    const card = document.createElement("li");
    const companyName = document.createElement("h2");
    const companyOpening = document.createElement("span");
    const companySector = document.createElement("span");

    card.classList.add("company");
    companyName.classList.add("companyName");
    companyOpening.classList.add("companyOpening");
    companySector.classList.add("companySector");

    companyName.innerText = name;
    companyOpening.innerText = opening_hours;
    companySector.innerText = sectors.description;

    card.append(companyName, companyOpening, companySector);
    return card;
};
