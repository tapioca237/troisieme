function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fonction pour supprimer le dernier caractère
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

// Fonction pour effectuer le calcul
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Erreur";
    }
}