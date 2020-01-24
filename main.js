const pets = [
    {
        image: "https://images1.americanlisted.com/nlarge/bernese-mountain-dog-puppy-for-sale-adoption-rescue-americanlisted_110259203.jpg",
        name: "Jabari",
        color: "Black",
        specialSkill: "licking",
        typeOfPet: "Dog",
    },
    {
        image: "https://theweathervaneofestespark.com/wp-content/uploads/2019/05/Steiff-Mini-Tigger-600x614.png",
        name: "Tigger",
        color: "Orange",
        specialSkill: "prrrring",
        typeOfPet: "Cat",
    },
    {
        image: "https://natgeo.imgix.net/factsheets/thumbnails/01-trex-scotty_publicity_websize-credit--beth-zaiken.adapt.1900.1.jpg?auto=compress,format&w=1024&h=560&fit=crop",
        name: "Big T",
        color: "Black",
        specialSkill: "eating",
        typeOfPet: "Dino",
    },
    {
        image: "https://i.pinimg.com/originals/82/fd/64/82fd6403daaccf94b321008419789fa6.png",
        name: "Alvin",
        color: "Brown",
        specialSkill: "singing",
        typeOfPet: "Chipmunk",
    },
    {
        image: "https://pbs.twimg.com/profile_images/378800000531890671/c2d77319b02af880222393d5b6d102be.jpeg",
        name: "Lizzy",
        color: "Green",
        specialSkill: "camouflaging",
        typeOfPet: "Lizard",
    },
    {
        image: "https://pbs.twimg.com/profile_images/662311903260229632/U7vMAFfc_400x400.jpg",
        name: "Nemo",
        color: "Orange striped",
        specialSkill: "getting lost",
        typeOfPet: "Fish",
    }
]
const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint

}
const buildPetCards = () => {
    let domString = '';
    for(let i = 0; i < pets.length; i++){

        domString += '<div class="pets">';
        domString +=   `<header><h1 class="name">${pets[i].name}</h1></header>`;
        domString +=   `<p> <img src="${pets[i].image}"></p>`;
        domString +=   `<section class="color"> ${pets[i].color}</section>`;
        domString +=   `<p class="skill"> ${pets[i].specialSkill}</p>`;
        domString +=   `<footer class="type"> ${pets[i].typeOfPet}</footer>`;
        domString += '</div>';
    }
    console.log(domString)
    printToDom("all-pets", domString);
}
buildPetCards()
