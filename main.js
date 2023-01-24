let records = [
    {
        lastname : "SAND",
        firstname : "Georges",
        matter : "Mathémathiques",
        note : 8
    },
    {
        lastname : "POINCARE",
        firstname : "Henri",
        matter : "Mathémathiques",
        note : 19
    },
    {
        lastname : "ZOLA",
        firstname : "Emile",
        matter : "Français",
        note : 18
    },
]

let capitalize;


const setDisplayStudent=document.querySelector("#student-display-button"); // Récupération du bouton voir/cacher élève
const addStudentArea = document.querySelector("#add-student-area"); // Récupération zone d'ajout d'un élève

const setDisplayMatter=document.querySelector("#matter-display-button");
const addMatterArea = document.querySelector("#add-matter-area");

const setDisplayNote=document.querySelector("#note-display-button");
const addNoteArea = document.querySelector("#add-note-area");

// Afficher/cacher la zone d'ajout nouvel élève
setDisplayStudent.addEventListener('click', () => {
    console.log(document.querySelector("#student-display-button"));
    if (addStudentArea.className==='hidden') { // vérification si class css "hidden" est présente
        addStudentArea.classList.remove("hidden"); // si oui, on enlève la class "hidden"
        setDisplayStudent.textContent = "ON" // on change le texte du bouton
    } else {
        addStudentArea.classList.add("hidden"); // sinon on ajoute la class "hidden"
        setDisplayStudent.textContent = "OFF" // et on change texte du bouton
    }
    
})

setDisplayMatter.addEventListener('click', () => {
    if (addMatterArea.className==='hidden') {
        addMatterArea.classList.remove("hidden");
        setDisplayMatter.textContent = "ON"
    } else {
        addMatterArea.classList.add("hidden");
        setDisplayMatter.textContent = "OFF"
    }
    
})

setDisplayNote.addEventListener('click', () => {
    console.log(document.querySelector("#student-display-button"));
    if (addNoteArea.className==='hidden') {
        addNoteArea.classList.remove("hidden");
        setDisplayNote.textContent = "ON"
    } else {
        addNoteArea.classList.add("hidden");
        setDisplayNote.textContent = "OFF"
    }
    
})

//Ajouter un nouvel élève :
const studentBtn = document.getElementById('student-submit-btn');
console.log(studentBtn)

studentBtn.addEventListener("click", () => {
    let lastName = document.getElementById("lastname").value.toUpperCase();
    let firstName = document.getElementById("firstname").value;
    capitalize = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    records.push({
        lastname : lastName,
        firstname : capitalize,
        matter : "",
        note: ""
    })
    console.table(record)
})


// Ajouter une matière
const matterBtn = document.getElementById('matter-submit-btn');

matterBtn.addEventListener("click", () => {
    let matter = document.getElementById("matter").value;
    capitalize = matter.charAt(0).toUpperCase() + matter.slice(1);

    records.push({
        lastname : "",
        firstname : "",
        matter : capitalize,
        note: ""
    })
    console.table(records)
})

// Sélectionner une matière
const selectMatter2 = document.getElementById('choose-matter2');
selectMatter2.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
records.forEach(record => {
    selectMatter2.innerHTML += `<option value ="${records.indexOf(record)+1}">${record.matter}</option>`;
});

const selectMatter = document.getElementById('choose-matter1');
selectMatter.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
records.forEach(record => {
    selectMatter.innerHTML += `<option value ="${records.indexOf(record)+1}">${record.matter}</option>`;
});

/*
const matterSelect = () => {
    
    
}
*/