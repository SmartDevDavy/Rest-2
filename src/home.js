const home = document.querySelector(".home");

const homeFunc = function() {
    
const div1 = document.createElement("div");
const head = document.createElement("h2");
head.textContent = "HOME PAGE";

div1.appendChild(head);

const para = document.createElement("p");
para.textContent = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!";

div1.appendChild(para);

const para2 = document.createElement("p");
para2.textContent = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!";

div1.appendChild(para2);

home.appendChild(div1);

div1.style.backgroundColor = "red";
div1.style.color = "blue";
div1.style.borderRadius = "15px";

};

export default homeFunc;