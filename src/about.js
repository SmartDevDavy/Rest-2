const about = document.querySelector(".about");

const aboutFunc = function() {
const div1 = document.createElement("div");
const head = document.createElement("h2");
head.textContent = "ABOUT PAGE";

div1.appendChild(head);

const para = document.createElement("p");
para.textContent = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!";

div1.appendChild(para);

const para2 = document.createElement("p");
para2.textContent = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!";

div1.appendChild(para2);

about.appendChild(div1);
};

export default aboutFunc;