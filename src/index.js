import './pages/index.css';


const quotes = ["Не человек для нравственности, а нравственность для человека.", "Искусство выигрывает, отворачиваясь от пошлости. Но когда оно отворачивается от великих исторических движений, оно само проникается элементами пошлости.", "Трудно всякое дело, если только не хочется его делать, легко всякое дело, за которое мы беремся с полным убеждением в его плодотворности и необходимости.", "Прогресс человеческий несет с собой смертельный приговор и религиозной идее, и религиозному чувству.", "Между наукой и жизнью существует теснейшая, неразрывная, ни для одной из них нимало не унизительная связь:чем более наука служит жизни, тем более жизнь обогащает науку.", "Каждое явление действием тех материальных сил, которые обусловливают его существование, рано или поздно, но неизбежно превращается в свою собственную противоположность.", "Искусство выигрывает, отворачиваясь от пошлости. Но когда оно отворачивается от великих исторических движений, оно само проникается элементами пошлости."];
let textIndex = 0;
let charIndex = 0;
let container = document.getElementById("quote-container");

function typeWriter() {
    if (charIndex < quotes[textIndex].length) {
        container.innerHTML += quotes[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        container.innerHTML = container.innerHTML.slice(0, -1);
        charIndex--;
        setTimeout(deleteText, 25);
    } else {
        textIndex++;
        if (textIndex >= quotes.length) {
            textIndex = 0;
        }
        setTimeout(typeWriter, 1000);
    }
}

typeWriter();



const root = document.querySelector('.marquee');
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,


});