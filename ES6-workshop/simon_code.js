function CardApp(){
    this.buttonAddNote = document.getElementById("btnAddNote");
    this.notesContainer = document.querySelector(".notes");
    this.noteInput = document.querySelector("#txtAddNote");
    
    this.buttonAddNote.addEventListener("click", this.addNote.bind(this));
}

CardApp.prototype.resetForm = function(){
    this.noteInput.value = "";
    this.noteInput.focus();
}

CardApp.prototype.addNote = function(){
    var newNote = document.createElement("div"); //<div> </div>
    newNote.setAttribute("class", "card"); // <div>
    newNote.innerHTML = "<p>" + this.noteInput.value + "</p>";
    
    var noteLink = document.createElement("a");
    noteLink.setAttribute("class", "card-remove");
    noteLink.innerHTML = "Remove";
    noteLink.setAttribute("href", "#");
    noteLink.addEventListener("click", this.removeNote.bind(this));
    
    newNote.appendChild(noteLink);
    
    this.notesContainer.appendChild(newNote);
    this.resetForm();
}

CardApp.prototype.removeNote = function (e) {
    var noteToRemove = e.target.parentElement;
    this.notesContainer.removeChild(noteToRemove);
    e.preventDefault();
}


var myApp = new CardApp();