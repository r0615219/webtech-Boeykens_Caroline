class NotesApp {
    constructor() {
        this.buttonAddNote = document.getElementById("btnAddNote");
        this.notesContainer = document.querySelector(".notes");
        this.noteInput = document.querySelector("#txtAddNote");
        
        this.buttonAddNote.addEventListener("click", this.addNote.bind(this));
    }

    resetForm() {
        this.noteInput.value = "";
        this.noteInput.focus();
    }

    addNote() {
        const newNote = document.createElement("div"); //<div> </div>
        newNote.setAttribute("class", "card"); // <div>
        newNote.innerHTML = `<p>${this.noteInput.value}</p>`;
        
        const noteLink = document.createElement("a");
        noteLink.setAttribute("class", "card-remove");
        noteLink.innerHTML = "Remove";
        noteLink.setAttribute("href", "#");
        noteLink.addEventListener("click", this.removeNote.bind(this));
        
        newNote.appendChild(noteLink);
        
        this.notesContainer.appendChild(newNote);
        this.resetForm();
    }

    removeNote(e) {
        const noteToRemove = e.target.parentElement;
        this.notesContainer.removeChild(noteToRemove);
        e.preventDefault();
    }
}


const myApp = new NotesApp();
