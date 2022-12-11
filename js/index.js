//FOOTER
let today = new Date();
let thisYear= today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerText = `Nicole Bradley ${thisYear}`;
footer.appendChild(copyright);

//SKILLS SECTION
let skills = ["WordPress", "Elementor", "JavaScript", "HTML", "CSS", "Nodejs", "MongoDB"];
let skillsSection = document.getElementById("skills");
//I know I was supposed to query the UL element via the skillsList and not the whole document but I couldnt get it to work 
let skillsList = document.querySelector("ul");

for (i= 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}