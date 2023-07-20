const pageHref = {
    login: "../../pages/login/index.html",
    register: "../../pages/register/index.html",
    homePage: "../../../index.html",
};

export const enableHeaderRedirect = (href) => {
    const btnArr = document.querySelectorAll(".redirect");

    btnArr.forEach((button) => {
        button.addEventListener("click", (e) => {
            const btnInnerText = e.target.innerText;

            switch (btnInnerText) {
                case "Login":
                    href
                        ? location.assign(href.login)
                        : location.assign(pageHref.login);
                    break;
                case "Cadastro":
                    href
                        ? location.assign(href.register)
                        : location.assign(pageHref.register);
                    break;
                case "Home":
                    location.assign(pageHref.homePage);
                    break;
                case "Logout":
                    if (localStorage.getItem("token")) {
                        localStorage.removeItem("token");
                    }
                    location.replace(pageHref.homePage);
                    break;
            }
        });
    });
};
