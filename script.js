const burgerBtn = document.querySelector('#burger-manu');
const navElement = document.querySelector('.planets');


burgerBtn.addEventListener('click', () => {
    navElement.classList.toggle('active');
    burgerBtn.classList.toggle('open')
  });
  navElement.addEventListener('click', () => {
    navElement.classList.remove('active');
  });
  

  const planets = document.querySelectorAll('.planet-link');
  const planetInfo = document.querySelector('.planet-info');
  

const overviewBtn = document.querySelector('#overview-btn');
const interanBtn = document.querySelector('#interan-btn');
const surfaceBtn = document.querySelector('#surface-btn');

const overview2Btn = document.querySelector('#overview2-btn');
const interan2Btn = document.querySelector('#interan2-btn');
const surface2Btn = document.querySelector('#surface2-btn');


const planetImg = document.querySelector('#planet-img');
const geologyImg = document.querySelector('#geology');
const borders = document.querySelectorAll('.border')

const planetName = document.querySelector('#planet-name');
const border1 = document.querySelector('.mercury')
const border2 = document.querySelector('.venus')
const border3 = document.querySelector('.earth')
const border4 = document.querySelector('.mars')
const border5 = document.querySelector('.jupiter')
const border6 = document.querySelector('.saturn')
const border7 = document.querySelector('.uranus')
const border8 = document.querySelector('.neptune')
const mercury = document.querySelector('.planet-1')
const venus = document.querySelector('.planet-2')
const earth = document.querySelector('.planet-3')
const mars = document.querySelector('.planet-4')
const jupiter = document.querySelector('.planet-5')
const saturn = document.querySelector('.planet-6')
const uranus = document.querySelector('.planet-7')
const neptune = document.querySelector('.planet-8')


const source = document.querySelector('#source')
const rotation = document.querySelector('#rotation');
const revolution = document.querySelector('#revolution');
const radius = document.querySelector('#radius');
const temperature = document.querySelector('#temperature');
const overviewLine = document.querySelector('.overview-line')
const interaLline = document.querySelector('.interan-line')
const surfaceLine = document.querySelector('.surface-line')

let activePlanet = 'Mercury';


const PLANETS_API = 'https://planets-api.vercel.app/api/v1/planets';

for (let i = 0; i < planets.length; i++) {
  planets[i].addEventListener('click', () => {
    activePlanet = planets[i].innerText; 
    getPlanet(planets[i].innerText, i);
  });
}


const getPlanet = async (planet = 'Mercury', planetIndex = 0) => {
  const response = await fetch(`${PLANETS_API}/${planet}`);
  const data = await response.json();

  
  planetInfo.textContent = data.overview.content;
  planetImg.src = data.images.planet;
  rotation.textContent = data.rotation;
  revolution.textContent = data.revolution;
  radius.textContent = data.radius;
  temperature.textContent = data.temperature;
  planetName.innerText = data.name;
  geologyImg.style.display = "none";
  source.href = data.overview.source;
  interaLline.style.backgroundColor = null;
  interaLline.style.backgroundColor = null;
  surfaceLine.style.backgroundColor = null;
  overview2Btn.style.backgroundColor = null;
  interan2Btn.style.backgroundColor = null;
  surface2Btn.style.backgroundColor = null;

  
    mercury.addEventListener('click', () => {
        border1.classList.add('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.remove('active-neptune');
    });
    venus.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.add('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.remove('active-neptune');
    });
    earth.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.add('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.remove('active-neptune');
    });
    mars.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.add('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.remove('active-neptune');
    });
    jupiter.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.add('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.remove('active-neptune');
    });
    saturn.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.add('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.remove('active-neptune');
    });
    uranus.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.add('active-uranus');
        border8.classList.remove('active-neptune');
    });
    neptune.addEventListener('click', () => {
        border1.classList.remove('active-mercury');
        border2.classList.remove('active-venus');
        border3.classList.remove('active-earth');
        border4.classList.remove('active-mars');
        border5.classList.remove('active-jupiter');
        border6.classList.remove('active-saturn');
        border7.classList.remove('active-uranus');
        border8.classList.add('active-neptune');
    });

  overviewBtn.addEventListener('click', () => {
    planetInfo.textContent = data.overview.content;
    source.href = data.overview.source;
    planetImg.src = data.images.planet;
    geologyImg.style.display = "none";
    geologyImg.src = null;
    overviewLine.style.backgroundColor = data.color;
    interaLline.style.backgroundColor = null;
    surfaceLine.style.backgroundColor = null;
  });
  interanBtn.addEventListener('click', () => {
    planetInfo.textContent = data.structure.content;
    source.href = data.structure.source;
    planetImg.src = data.images.internal;
    geologyImg.style.display = "none";
    geologyImg.src = null;
    interaLline.style.backgroundColor = data.color;
    overviewLine.style.backgroundColor = null;
    surfaceLine.style.backgroundColor = null;
  });
  surfaceBtn.addEventListener('click', () => {
    planetInfo.textContent = data.geology.content;
    source.href = data.geology.source;
    planetImg.src = data.images.planet;
    geologyImg.src = data.images.geology;
    geologyImg.style.display = "inline";
    surfaceLine.style.backgroundColor = data.color;
    overviewLine.style.backgroundColor = null;
    interaLline.style.backgroundColor = null;
  });

  overview2Btn.addEventListener('click', () => {
    planetInfo.textContent = data.overview.content;
    source.href = data.overview.source;
    planetImg.src = data.images.planet;
    geologyImg.style.display = "none";
    geologyImg.src = null;
    overview2Btn.style.backgroundColor = data.color;
    interan2Btn.style.backgroundColor = null;
    surface2Btn.style.backgroundColor = null;
  });
  interan2Btn.addEventListener('click', () => {
    planetInfo.textContent = data.structure.content;
    source.href = data.structure.source;
    planetImg.src = data.images.internal;
    geologyImg.style.display = "none";
    geologyImg.src = null;
    interan2Btn.style.backgroundColor = data.color;
    overview2Btn.style.backgroundColor = null;
    surface2Btn.style.backgroundColor = null;
  });
  surface2Btn.addEventListener('click', () => {
    planetInfo.textContent = data.geology.content;
    source.href = data.geology.source;
    planetImg.src = data.images.planet;
    geologyImg.src = data.images.geology;
    geologyImg.style.display = "inline";
    surface2Btn.style.backgroundColor = data.color;
    interan2Btn.style.backgroundColor = null;
    overview2Btn.style.backgroundColor = null;
  });


};

getPlanet();
