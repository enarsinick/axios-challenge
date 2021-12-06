"use strict"

//////////////////// CHALLENGE 1 ////////////////////
const url = "https://reqres.in/api/users?page=2";
axios.get(url)
     .then(response => buildHtml1(response.data.data))
     .catch(err => console.error(err));

const buildHtml1 = (people) => {
     const wrapper = document.querySelector("div.challenge-1-wrapper");
     people.forEach(person => {
          // Create card element
          const card = document.createElement("div");
          card.classList.add('card');

          // Create card body
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body")

          // Create image
          const image = document.createElement("img");
          image.src = person.avatar;

          // Create name heading
          const heading = document.createElement("h5");
          heading.innerText = `${person.first_name} ${person.last_name}`;
          heading.classList.add("card-title");

          // Create email text
          const email = document.createElement("p");
          email.innerText = person.email;
          email.classList.add("card-text");

          // Create button
          const button = document.createElement("button");
          button.classList.add("btn");
          button.classList.add("btn-primary");
          button.innerText = "Contact"

          // Add items to page
          wrapper.appendChild(card);
          card.appendChild(image);
          card.appendChild(cardBody);
          cardBody.appendChild(heading);
          cardBody.appendChild(email);
          cardBody.appendChild(button);
     });
}

////////////////////////////////////////////////////////////

//////////////////// CHALLENGE 2 ////////////////////

const url2 = "https://reqres.in/api/users/2";
axios.get(url2)
     .then(response => buildHtml2(response.data.data))
     .catch(err => console.error(err));

const buildHtml2 = person => {
     const wrapper = document.querySelector("div.challenge-2-wrapper");
     // Create card element
     const card = document.createElement("div");
     card.classList.add('card');

     // Create image
     const image = document.createElement("img");
     image.src = person.avatar;

     // Create card body
     const cardBody = document.createElement("div");
     cardBody.classList.add("card-body")

     // Create name heading
     const heading = document.createElement("h5");
     heading.innerText = `${person.first_name} ${person.last_name}`;
     heading.classList.add("card-title");

     // Create email text
     const email = document.createElement("p");
     email.innerText = person.email;
     email.classList.add("card-text");

     // Create button
     const button = document.createElement("button");
     button.classList.add("btn");
     button.classList.add("btn-primary");
     button.innerText = "Contact"


     // Add items to page
     wrapper.appendChild(card);
     card.appendChild(image);
     card.appendChild(cardBody);
     cardBody.appendChild(heading);
     cardBody.appendChild(email);
     cardBody.appendChild(button);
}


////////////////////////////////////////////////////////////

//////////////////// CHALLENGE 3 ////////////////////

const url3 = "https://reqres.in/api/users";
const formButton = document.querySelector("#formButton1");
formButton.addEventListener('click', (e) => {
     e.preventDefault();
     const wrapper = document.querySelector("wrapper");
     const name = document.querySelector("#name").value;
     const job = document.querySelector("#job").value;
     if (!name || !job) {
          const error = document.createElement("div");
          error.innerText = "Provide some info!";
          error.classList.add("alert");
          error.classList.add("alert-danger");
          error.setAttribute("role", "alert");
          wrapper.insertBefore(error, wrapper.childNodes[2]);
          setTimeout(() => {
               error.remove();
          }, 1500);
     } else {
          const data = {name: name, job: job};
          axios.post(url3, data)
               .then(response => {
                    const success = document.createElement("div");
                    success.innerText = "User has been created!";
                    success.classList.add("alert");
                    success.classList.add("alert-success");
                    success.setAttribute("role", "alert");
                    wrapper.insertBefore(success, wrapper.childNodes[2]);
                    setTimeout(() => {
                         success.remove();
                    }, 1500);
                    document.querySelector("#name").value = "";
                    document.querySelector("#job").value = "";
               })
               .catch(err => console.error(err)); 
     }
});

//////////////////////// DELETE A USER ///////////////////////
const delUrl = "https://reqres.in/api/users/2";
axios.delete(delUrl)
     .then(response => deleteUser())
     .catch(err => console.error(err)); 

////////////////////////////////////////////////////////////

//////////////////////// CHALLENGE 4 ///////////////////////

const url4 = "https://reqres.in/api/register";
let newUser = {
     "email": "eve.holt@reqres.in",
     "password": "pistol"
 };
axios.put(url4, newUser)
     .then(response => console.log(response))
     .catch(err => console.error(err)); 


////////////////////////////////////////////////////////////

//////////////////////// CHALLENGE 5 ///////////////////////

const url5 = "https://reqres.in/api/login";
axios.post(url5, newUser)
     .then(response => console.log(response))
     .catch(err => console.error(err)); 