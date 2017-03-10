/*let firstname = 'Caro';
let lastname = 'Boeykens';
console.log("Hi, my name is " + firstname + " " + lastname + ".");
console.log(`Hi, my name is ${firstname} ${lastname}.`); */


function CardApp() {
	this.buttonAddNote = document.getElementById('btnAddNote');
	this.notesContainer = document.querySelector(".notes");
	this.noteInput = document.querySelector("#txtAddNote");

	this.buttonAddNote.addEventListener("click", this.addNote.bind(this));
}

CardApp.prototype.resetForm = function() {
	this.noteInput.value ="";
	this.noteInput.focus();
}

CardApp.prototype.addNote = function() {
	var newNote = document.createElement("div");
	newNote.setAttribute("class", "card");
	newNote.innerHTML = "<p>" + this.noteInput.value + "</p>";

	var notelink = document.createElement("a");
	notelink.setAttribute("class", "card-remove");
	notelink.innerHTML = "remove";
	notelink.setAttribute("href", "#");
	notelink.addEventListener("click", this.removeNote);

	newNote.appendChild(notelink);

	this.notesContainer.appendChild(newNote);
	this.resetForm();
}

CardApp.prototype.removeNote = function(e) {
	var noteToRemove = e.target.parentElement;
    this.notesContainer.removeChild(noteToRemove);
    
    e.preventDefault();
    
    //ERGENS NOG EEN FOUTJE
}


var myApp = new CardApp();