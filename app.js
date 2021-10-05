showNotes();
// if user add a note,add it to the localStorage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
    let addtxt = document.getElementById('addtxt');
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value="";
    console.log(notes);
    showNotes();

})

//Function to Show the notes
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element , index) {
        html+= `
    
            <div class=" my-2 mx-2 noteCard" style=" width: 18rem;">
                    
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}"onclick="deleteNote(this,id)" class="btn btn-primary">Delete Note</button>
            </div>
            </div>

        `;

        
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length !=0){
        notesElm.innerHTML = html;
    }
    else
    {
        notesElm.innerHTML=`<h2>Please Add Your Notes</h2>`
    }

}


//Function to delete the note
function deleteNote(index){
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
   notesObj.splice(index,1); 
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showNotes();

}

const search = document.getElementById('searchTxt');

 search.addEventListener("input",  function(){

    let inputVal =search.value.toLowerCase();
    console.log('you are searching',inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })
})




