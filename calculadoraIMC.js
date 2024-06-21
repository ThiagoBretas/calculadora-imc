const weight = 80; // weight in kg
const heighy = 164; // heighy in cm

function calculationIMC (weight, heighy){
    let metersHeighy = heighy/100;
    let heighySquared = metersHeighy*metersHeighy;
    let resultIMC = weight/heighySquared;

    return resultIMC;
};

let IMC = calculationIMC(weight, heighy);

console.log(weight);
console.log(heighy);
console.log(IMC.toFixed(0));
