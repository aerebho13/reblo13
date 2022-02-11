let toggleButton= document.getElementsByClassName('toggle-button')[0];
let navbarlinks= document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',() => {
    navbarlinks.classList.toggle('active')
});

let salon={
    name:"The Pet Salon",
    address:{
        street:"3445 Vine St, Hollywood, CA",
        ZIPcode:"33023",
        number:"310-555-0089"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Coco",
            age:3,
            gender:"female",
            breed:"Poodle",
            service:"Grooming",
            owner:"Ryhan",
            phone:"559-555-1934"
        },
        {
            name:"Bear",
            age:2,
            gender:"female",
            breed:"Aussie Shepard",
            service:"Grooming",
            owner:"Mike",
            phone:"480-555-9626"
        },
        {
            name:"Captain",
            age:8,
            gender:"Male",
            breed:"Husky",
            service:"Grooming",
            owner:"Justin",
            phone:"619-555-6128"
        },
        {
            name:"Lexi",
            age:5,
            gender:"female",
            breed:"Husky",
            service:"Grooming",
            owner:"James",
            phone:"310-555-6390"
        }
    ]
}
console.log(salon.pets);

function displayPetNames(){
    for(let i=0;i<4; i++){
        console.log(salon.pets[i].name);
    }

}
displayPetNames();

alert(salon.pets.length);

function Pet(name,age,gender,breed,service,owner,phone) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.phone=phone;
}



let petName= document.getElementById("txtName");
let petAge= document.getElementById("txtAge");
let petGender= document.getElementById("txtGender");
let petBreed= document.getElementById("txtBreed");
let petService= document.getElementById("selService");
let petOwner= document.getElementById("txtOwner");
let petPhone= document.getElementById("txtPhone");

function register() {
    console.log("Register");
    let thePet= new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,petPhone.value);
    console.log(thePet);
    salon.pets.push(thePet);
    console.log(salon.pets);
    showPetsCards();
    alert("You registered a new pet!");
}

function displayPets() {
    
}

function showPetsCards(){
    document.getElementById("btnClear").hidden=true;
    document.getElementById("search-header").innerHTML="Pets List";
    document.getElementById("petList").innerHTML="";

    for(let i=0;i<salon.pets.length;i++){
        createCard(salon.pets[i]);
        document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);
    }
}

function removePet(index){
    if(index<salon.pets.length)
    {
    salon.pets.splice(index, 1);
    }
    showPetsCards();
}

function searchPet(){
    document.getElementById("btnClear").hidden=false;
   let name=document.getElementById("txtSearch").value;
   document.getElementById("search-header").innerHTML = "Search Result";
   document.getElementById("petList").innerHTML="";

   for(let i=0;i<salon.pets.length;i++){
       
       if(name.toLowerCase() == salon.pets[i].name.toLowerCase())
       document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);
   }
}

function createCard(pet, index){
    return `
        <div class="pet-card">
            <h3>${pet.name}</h3>
            <p> Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner: ${pet.owner}</p>
            <p>Phone #: ${pet.phone}</p>
            <button onclick="removePet(${index});">Remove</button>
            
        </div>
    `;

}
function init(){
    salon.pets.push();
    showPetsCards();
}
window.onload=init;