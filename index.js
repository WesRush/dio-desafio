let nome = "Weslley";
let xpHeroi = 1;
let nivel = "";

if (xpHeroi <= 1000) {
  nivel = "Ferro";
} else if (xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi <= 6000) {
  nivel = "Prata";
} else if (xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
  nivel = "Imortal";
} else if (xpHeroi >= 10001) {
  nivel = "Radiante";
}
console.log("O herói " + nome + " está no nível " + nivel);
