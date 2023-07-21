export const createCoworkerCard = (userObj) => {
    const card = document.createElement("li");
    const userNameElem = document.createElement("h3");
    const userExperienceLevelElem = document.createElement("span");

    userNameElem.innerText = userObj.username;
    userExperienceLevelElem.innerText = userObj.professional_level;

    card.append(userNameElem, userExperienceLevelElem);

    return card;
};
