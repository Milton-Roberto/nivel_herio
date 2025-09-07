let nomeHeroi = "Valter";
let heroiXp = 1000;
let nivelDoHeroi = "";


if (heroiXp < 1000) {
    nivelDoHeroi = "Ferro";
} else if (heroiXp >= 1001 && heroiXp <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (heroiXp >= 2001 && heroiXp <= 5000) {
    nivelDoHeroi = "Prata";
} else if (heroiXp >= 5001 && heroiXp <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (heroiXp >= 7001 && heroiXp <= 8000) {
    nivelDoHeroi = "Platina";
} else if (heroiXp >= 8001 && heroiXp <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (heroiXp >= 9001 && heroiXp <= 10000) {
    nivelDoHeroi = "Imortal";
} else if (heroiXp >= 10001) {
    nivelDoHeroi = "Radiante";
} else {
    nivelDoHeroi = "Nível desconhecido";
}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelDoHeroi}`);
