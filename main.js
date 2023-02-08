// tady je místo pro náš program

function stisk() {
    let jmeno = prompt("Zadejte své jméno");
    let prijmeni = prompt("Zadejte své příjmení");
    let vek = Number(prompt("Zadejte svůj věk"));
    let barva = prompt("Zadejte svoji oblíbenou barvu (v angličtině)");

    let vystup = document.querySelector (".vystupProgramu");
    vystup.innerHTML = jmeno + " " + prijmeni + ", " + vek;
    vystup.style.color = barva;
}




