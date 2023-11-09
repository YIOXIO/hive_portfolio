import './pages/services.css';



const tabs = [...document.querySelectorAll(".tab")];

const toggleTab = (element) => {
    let tabBtn = element.querySelectorAll(".services__button");
    let tabContent = element.querySelectorAll(".services__content");
    tabBtn[0].classList.add("services__button--active");
    tabContent[0].classList.add("services__content--active");

    const removeTab = (element) => {
        element.forEach((i) => {
            i.classList.remove("services__button--active");
            i.classList.remove("services__content--active");
        });
    };

    const openTab = (index) => {
        removeTab(tabBtn);
        removeTab(tabContent);
        tabBtn[index].classList.add("services__button--active");
        tabContent[index].classList.add("services__content--active");
    };

    tabBtn.forEach((el, i) => {
        el.onclick = () => openTab(i);
    });
};

tabs.forEach((el) => toggleTab(el));