let resultDisplay = $("#bone-result");

$("#bone-btn").on("click", function(e) {
    e.preventDefault();
    resultDisplay.empty();
    checkBones();
})

const boneResults = ["bone", "no bone"]

const checkBones = () => {
    let result = boneResults[Math.floor(Math.random() * boneResults.length)];

    resultDisplay.innerHTML = ""

    if (result === "bone") {
        resultDisplay.append("Hell yeah, it's a bones day");
    }

    if (result === "no bone") {
        resultDisplay.append("Damn, it's not a bones day");
    }

    console.log(resultDisplay)
}