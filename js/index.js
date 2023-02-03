//FOOTER
let today = new Date();
let thisYear= today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerText = `Nicole Bradley ${thisYear}`;
copyright.id="copyright";
footer.appendChild(copyright);

//SKILLS SECTION
let skills = ["WordPress", "Elementor", "JavaScript", "HTML", "CSS", "Nodejs", "MongoDB"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (i= 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}



//handle message form submit
let messageForm = document.getElementsByName("leave_message");

console.log(messageForm[0], "this is the form");



messageForm[0].addEventListener("submit", function(event){
    event.preventDefault();

    let messageForm = event.target;

    let nameInput = event.target.name.value;
    let emailInput = event.target.email.value;
    let messageInput = event.target.message.value;

    //the inputs
    console.log(nameInput);
    console.log(emailInput);
    console.log(messageInput);

    let messageSection = document.getElementById("messages");

    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");

    
    newMessage.innerHTML = `
    <a href="mailto:${emailInput}">${nameInput}</a>
    <span>${messageInput}</span>
    `;

    //adding messages to the list
    messageList.appendChild(newMessage);
    
    
    //========================THE REMOVE BUTTON===================
    let removeButton = document.createElement("button");
    removeButton.id="removeBtn";
    removeButton.type = "button";
    removeButton.innerHTML = "REMOVE";
    

    //button removes list item
    removeButton.addEventListener("click", function(event){
        event.preventDefault();
        let entry = removeButton.parentNode;
        entry.remove();

        //function call to hide or show message list when click remove button
        hideShow();

    })

    newMessage.appendChild(removeButton);


    //======================================================================



    //========================THE EDIT BUTTON===================
    // let editButton = document.createElement("button");
    // editButton.type = "button";
    // editButton.innerHTML = "EDIT";
    

    // //button edits list item
    // editButton.addEventListener("click", function(event){
    //     event.preventDefault();
        
    //     //NOTHING HERE YET. IN PROGRESS. 

    //     console.log("edit button has been clicked");

    //     //function call to hide or show message list when click edit button
    //     hideShow();

    // })

    // newMessage.appendChild(editButton);


    //======================================================================




    messageList.appendChild(newMessage);

    //resetting form fields
    messageForm.reset();

    //function call to hide or show message list when click submit button
    hideShow();

});





//function that hides the message section when there are no messages
//and shows the message section when there is are messages
function hideShow () {

    let messageSection = document.getElementById("messages");
    let listItems = messageSection.children[1].childNodes;

    if (listItems.length > 0){
        console.log("there's a list");
        messageSection.hidden = false;
    }else{
        console.log("there is no list");
        messageSection.hidden = true;
    }
}

//function call to hide or show message list when page loads
hideShow();



// let gitHubRequest = new XMLHttpRequest();

// gitHubRequest.open("GET", "https://api.github.com/users/nicoleCodeGirl/repos", true);
// gitHubRequest.send();

// gitHubRequest.onload = function() {
//     let repositories = JSON.parse(this.response);
//     console.log(repositories);

  




// } 


//============lesson 6.2===============================

fetch('https://api.github.com/users/nicoleCodeGirl/repos')
  .then((response) => response.json())
  .then(function(repositories) {
    
    let projectSection  = document.getElementById("projects");

    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++){
        let project = document.createElement("li");
        project.innerHTML = `<a href="https://www.github.com/nicolecodegirl/${repositories[i].name}">` + repositories[i].name + '</a>';
        projectList.appendChild(project);
        console.log(project.innerText)
    
    
    }
            console.log(repositories, "the array that has the list of repositories");

  } );