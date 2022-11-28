const btnAdd = document.querySelector("#btn-add");
const container = document.querySelector(".container");

// ADD NEW TEXT AREA
btnAdd.addEventListener("click", ()=>{
    textElement =handleCreateTextArea(Math.floor(Math.random()*100000), "");
    saveNotes(textElement.id, textElement.value);
});


// CREATE TEXT AREA
function handleCreateTextArea(id, content){
    let textElement = document.createElement("textarea");
    textElement.placeholder = "Enter the notes here..";
    textElement.classList.add("notes");
    textElement.id = id;
    textElement.value = content;

    // FOR UPDATE
    textElement.addEventListener("keyup", ()=>{handleUpdateNotes(
        textElement.id, textElement.value
    )});

    // FOR DELETE
    textElement.addEventListener("dblclick",()=>{handleRemoveNotes(textElement.id, textElement)});
    
    container.insertBefore(textElement, btnAdd);
    
    return textElement;
}


// GET NOTES VALUE FROM LOCAL STORAGE
function getStickyNotesValue(){
    return JSON.parse(localStorage.getItem("stickyNotes")||"[]");
}


// STORE DATA TO LOCAL STORAGE
function saveNotes(id, content){
    let notes = getStickyNotesValue();
    notes.push({id, content});
    localStorage.setItem("stickyNotes", JSON.stringify(notes));
}


//READ ALREADY EXISTING DATA 
function readNotesData(){
    let notes = getStickyNotesValue();
    notes.forEach(note=>{
        handleCreateTextArea(note.id, note.content);
    });
}readNotesData();


// UPDATE NOTES VALUES
function handleUpdateNotes(id, content){
    let notes = getStickyNotesValue();
    notes.forEach(note=>{
        if(note.id == id) note.content = content;
    });
    localStorage.setItem("stickyNotes", JSON.stringify(notes));   
}


// HANDLE REMOVE TEXT AREA
function handleRemoveNotes(id, textElement){
    if (!confirm("Are you sure want to remove this sticky notes?")) return;
    let notes = getStickyNotesValue();
    container.removeChild(textElement);
    localStorage.setItem("stickyNotes", JSON.stringify(notes.filter(note=>note.id!=id)));
}