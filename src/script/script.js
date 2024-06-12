const button = document.querySelector(".button")
const textsh2 = document.querySelector(".text")
const text = [
   "Oi amor da minha vida.", 
    "Tudo bem? Espero que sim.",
    "Acordei dodói, espirrando.",
    "E estou fazendo isso para você.",
    "Então, minha vida, 1 mês e 17 dias",
    "Desde que nos conhecemos.",
    "Sinto o maior prazer",
    "Por ter uma mulher como você,",
    "Não apenas pela beleza.",
    "Mas também pela mulher amável,",
    "doce,",
    "cativante,",
    "sensacional,",
    "mulher forte,",
    "Mulher encantadora",
    "Mulher adorável",
    "Mulher fascinante",
    "Mulher divina",
    "Mulher radiante",
    "Mulher elegante",
    "Um anjo(mas tbm um kpt)",
    "com detalhes amáveis,",
    "com detalhes lindos.",
    "Tão bela quanto o seu sorriso,",
    "Encantadora como a sua voz,",
    "Perfeita como o seu rosto.",
    "Gostosa.😈",
    "Eu sou um cara",
    "Muito feliz por estar contigo.",
    "Obrigado.",
    "Mulher Maravilhosa,",
    "Mulher Incrível,",
    "Mulher Excepcional,",
    "Mulher que eu amo muito",
    "e quero comigo",
    "pelo resto da vida.",
    "Eu te amo, amor.",
    "Amo ontem,",
    "Amo hoje,",
    "E quero amar sempre,",
    "E te conhecer todos os dias",
    "como se fosse a primeira vez.",
    "Não duvide",
    "Do quanto eu gosto de você.",
    "Eu te amo, abestada veia."
]
index = 0
function insertValues() {
    setTimeout(() => {
        textsh2.innerHTML = text[index];
        index = (index + 1) % text.length;
    }, 300);
}
button.addEventListener("click", function () {
    insertValues();
});
insertValues()