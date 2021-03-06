const pets = [
    {
        image: "https://images1.americanlisted.com/nlarge/bernese-mountain-dog-puppy-for-sale-adoption-rescue-americanlisted_110259203.jpg",
        name: "Jabari",
        color: "Black",
        specialSkill: "Jabari will love you and lick you until you fall in love! He loves to cuddle!",
        typeOfPet: "DOG",
    },
    {
        image: "https://theweathervaneofestespark.com/wp-content/uploads/2019/05/Steiff-Mini-Tigger-600x614.png",
        name: "Tigger",
        color: "Orange",
        specialSkill: "Tigger has a bounce that will keep a smile on your face. He needs a home with a big yard!",
        typeOfPet: "CAT",
    },
    {
        image: "https://natgeo.imgix.net/factsheets/thumbnails/01-trex-scotty_publicity_websize-credit--beth-zaiken.adapt.1900.1.jpg?auto=compress,format&w=1024&h=560&fit=crop",
        name: "Big T",
        color: "Black",
        specialSkill: "This dinosaur has somewhat of a hefty appetite. Be prepared to be eaten out your house and home.",
        typeOfPet: "DINO",
    },
    {
        image: "https://comicvine1.cbsistatic.com/uploads/scale_medium/11/114183/6674253-alvinnewart.png",
        name: "Alvin",
        color: "Brown",
        specialSkill: "Alvin will be sure to seranade you and yours. He has the voice of an angel.",
        typeOfPet: "DOG",
    },
    {
        image: "https://pbs.twimg.com/profile_images/378800000531890671/c2d77319b02af880222393d5b6d102be.jpeg",
        name: "Lizzy",
        color: "Green",
        specialSkill: "Lizzy the Lizard loves to camouflage. Be careful, you may step on her!",
        typeOfPet: "DINO",
    },
    {
        image: "https://pbs.twimg.com/profile_images/662311903260229632/U7vMAFfc_400x400.jpg",
        name: "Nemo",
        color: "Orange striped",
        specialSkill: "Large fish tanks will not be the best fit for Nemo. He may get lost!",
        typeOfPet: "CAT",
    }
]
const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint

}

const petBuilder = (petArray) => {
    let domString = '';
    for(let i = 0; i < petArray.length; i++) {
        if (pets[i].typeOfPet === "DOG") {

        domString += '<div class="pets">';
        domString +=   `<header><h1 class="name">${petArray[i].name}</h1></header>`;
        domString +=   `<p> <img src="${petArray[i].image}"></p>`;
        domString +=   `<section class="color"> ${petArray[i].color}</section>`;
        domString +=   `<p class="skill"> ${petArray[i].specialSkill}</p>`;
        domString +=   `<footer class="fdog"> ${petArray[i].typeOfPet}</footer>`;
        domString += '</div>';
    }
        else if (pets[i].typeOfPet === "CAT") {
            domString += '<div class="pets">';
            domString +=   `<header><h1 class="name">${petArray[i].name}</h1></header>`;
            domString +=   `<p> <img src="${petArray[i].image}"></p>`;
            domString +=   `<section class="color"> ${petArray[i].color}</section>`;
            domString +=   `<p class="skill"> ${petArray[i].specialSkill}</p>`;
            domString +=   `<footer class="fcat"> ${petArray[i].typeOfPet}</footer>`;
            domString += '</div>';
        }
        else {
            domString += '<div class="pets">';
            domString +=   `<header><h1 class="name">${petArray[i].name}</h1></header>`;
            domString +=   `<p> <img src="${petArray[i].image}"></p>`;
            domString +=   `<section class="color"> ${petArray[i].color}</section>`;
            domString +=   `<p class="skill"> ${petArray[i].specialSkill}</p>`;
            domString +=   `<footer class="fdino"> ${petArray[i].typeOfPet}</footer>`;
            domString += '</div>';
        }
    console.log(domString)
    printToDom("all-pets", domString);
}
}
 
    const findMyPets = (e) => {
        const buttonId = e.target.id;
        if(buttonId === 'All'){
            petBuilder(pets);
        } else {
        const myPets = [];
        for (let i = 0; i < pets.length; i++){
            if(pets[i].typeOfPet === buttonId) {
                myPets.push(pets[i]);
            }
        }
        petBuilder(myPets);
    }
};  
const event = () => {
    document.getElementById('DOG').addEventListener('click', findMyPets);
    document.getElementById('CAT').addEventListener('click', findMyPets);
    document.getElementById('DINO').addEventListener('click', findMyPets);
    document.getElementById('ALL').addEventListener('click', findMyPets);
};

const init = () => {
    petBuilder(pets);
    event();  
};

init ();