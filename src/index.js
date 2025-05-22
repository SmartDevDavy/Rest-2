console.log("Nigga");
const content = document.querySelector("#content");

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");
const btn = document.querySelector(".btn");

import pageLoader from "./mod.js";
pageLoader();

import homeFunc from "./home.js";
import aboutFunc from "./about.js";
import menuFunc from "./menu.js";




/*
button.forEach(btn => {
    btn.addEventListener("click", ()=> {
       
         switch (btn.onclick) {
            case home:
                return homeFunc();
                break;

                case menu:
                   return  menuFunc();     
                break;

                case about:
                return aboutFunc();
         
            default:
                return "please click a button"
                break;
         };
            
    });
});
*/


 home.addEventListener("click", () => {
      homeFunc();
});

menu.addEventListener("click", () => {
     menuFunc();
});

about.addEventListener("click", () => {
       aboutFunc();
});

