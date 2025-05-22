

 const content = document.querySelector("#content");

 const pageLoader = function() {
   const h = document.createElement("h1");
   h.textContent = "RESTAURANT PAGE";
   content.appendChild(h);

   const p1 = document.createElement("p");
   p1.textContent =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae placeat, impedit doloremque ducimus tempora reprehenderit sequi quo provident saepe doloribus corporis porro facilis at aperiam ab corrupti nihil ex.";
    content.appendChild(p1);
   
   const p2 = document.createElement("p");
    p2.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae placeat, impedit doloremque ducimus tempora reprehenderit sequi quo provident saepe doloribus corporis porro facilis at aperiam ab corrupti nihil ex.";
    content.appendChild(p2);

    const p3 = document.createElement("p");
    p2.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae placeat, impedit doloremque ducimus tempora reprehenderit sequi quo provident saepe doloribus corporis porro facilis at aperiam ab corrupti nihil ex.";
    content.appendChild(p3);

    console.log("Nigga 222222");
};

export default pageLoader;