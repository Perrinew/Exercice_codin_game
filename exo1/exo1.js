document.body.firstElementChild.innerHTML = "Rick Asley - Never gonna give you up";

const coupl = document.getElementsByClassName("couplet")

for (let i = 0; i < coupl.length; i++) {
    coupl[i].removeChild(coupl[i].firstChild);
}

const refrain = document.getElementsByClassName("couplet refrain");

for (let x = 0; x < refrain.length; x++) {
    const refrainChildren = refrain[x].childNodes;
    const refrainNUmberChildren = Math.round(refrainChildren.length / 2);

    for (let y = 0; y < refrainNUmberChildren; y += 2) {
        for (let i = 0; i < 2; i++) {
            refrain[x].removeChild(refrainChildren[y]);
        }
    }
}    

const err = document.getElementById("erreur")
err.remove("erreur")

const footer = document.createElement("footer");
footer.innerText = "© Copyright 2020 - Nom";
document.body.appendChild(footer);