


const HowToPlay = document.getElementById("HowToPlay");
const AboutUs = document.getElementById("AboutUs");
const Cosmology = document.getElementById("Cosmology");

const links = document.getElementsByClassName("bannerlink");

const show_button = document.getElementById("show_button");
const imgs = document.getElementsByClassName("main_img");

let HowTo_reached = false;
let About_reached = false;
let Cosmo_reached = false;



document.addEventListener('wheel', e=> {
  console.log(e.pageY);

  if (e.pageY >= 550 && !HowTo_reached){
      HowTo_reached=true;
      HowToPlay.setAttribute("class", "rightTop");
       
  }

  if (e.pageY >= 700 && !About_reached){
    About_reached=true;
    AboutUs.setAttribute("class", "leftTop");
     
  }

  if (e.pageY >= 800 && !Cosmo_reached){
    Cosmo_reached=true;
    Cosmology.setAttribute("class", "rightTop");
     
  }

});

for(let i =0; i<links.length; i++){
  links[i].addEventListener('click', e=> {

    HowTo_reached=true;
    HowToPlay.setAttribute("class", "rightTop");
    About_reached=true;
    AboutUs.setAttribute("class", "leftTop");
    Cosmo_reached=true;
    Cosmology.setAttribute("class", "rightTop");
  });
}

let imgs_shown = false;
show_button.addEventListener('click', e=>{

  if (!imgs_shown) {
    for(let i =0; i<imgs.length; i++){
      imgs[i].classList.remove("hidden");
    }
    show_button.innerHTML= "Show Less";
    imgs_shown = true;
  }
  else{
    for(let i =1; i<imgs.length; i++){
      imgs[i].classList.add("hidden");
    }
    show_button.innerHTML= "See More!";
    imgs_shown = false;
  }
  
});