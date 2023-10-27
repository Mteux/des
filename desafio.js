
// Nome do Jogador e experiencia adquiridos
let nome = "Joao"
let xp = 6500

//Variavel que vai receber o ranking do jogador
let ranking = ""



if (xp <= 1000) {
    ranking = "Ferro"
} else if (xp <= 2000) {
    ranking = "Bronze"
} else if (xp <= 6000) {
    ranking = "Prata"
} else if ( xp <= 7000) {
    ranking = "Ouro"
} else if (xp <= 8000 ) {
    ranking = "Platina"
} else if (xp <= 9000 ) {
    ranking = "Ascendente "
} else if (xp <= 10000 ) {
    ranking = "Imortal "
} else {
    ranking = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nivel de ${ranking}`);