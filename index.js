let maVariable = true;
let monMessage = "";

if (maVariable){
    let monMessage = "Bienvenue dans votre page profil"
}else{
    let monMessage = "vous n'etes pas connecté"
}
console.log(monMessage);


let scorePSG = 11;
let scoreRealMadrid = 10;

if (scorePSG > scoreRealMadrid){
    console.log("Vous êtes en train de rêver il est temps d'aller au boulot")
}else if (scorePSG < scoreRealMadrid)  {
    console.log("Bah logique ! ")
}else {
    console.log("Quoi ! match null !!")
};