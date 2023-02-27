const latbarToggle = document.getElementById('latbar-toggle');
const latbarMenu = document.getElementById('latbar-menu');
const latbarContainer = document.querySelector('.latbar-container');
const navbarLogo = document.querySelector('.navbar-img');
const about = document.querySelector('.about-div');
const info = document.querySelector('.info');
const skillHobbie = document.querySelector('.skills-hobbies');
const formation = document.querySelector('.formation');
const experience = document.querySelector('.experience');
const footer = document.querySelector('.footer');

latbarToggle.addEventListener('click', () => {
    latbarMenu.classList.toggle('active');
    if(latbarContainer.style.width === "260px") {

        latbarContainer.style.width = "68px";

        navbarLogo.style.margin = "0 0 0 150px";

        about.style.margin = '0';

        info.style.padding = '0 150px 0 150px';

        skillHobbie.style.margin = '0 150px 50px 150px';

        formation.style.margin = '0';

        experience.style.margin = '0 150px';

        footer.style.margin = '5px 0px';
    } else {
        latbarContainer.style.width = "260px";

        navbarLogo.style.margin = "0 0 0 300px";

        about.style.margin = '0 0 0 150px';

        info.style.padding = '0 150px 0 300px';

        skillHobbie.style.margin = '0 50px 50px 300px';

        formation.style.margin = '0 0 0 250px';

        experience.style.margin = '0 0 0 200px';

        footer.style.margin = '5px 200px';
    }
});