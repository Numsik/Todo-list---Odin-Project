
function createTodo(name,description,date,priority,checklist,id){
    return {name,description,date,priority,checklist,id};
}

let uvarittodo = createTodo("Uvarit", "Musis uvarit","02/04/2026","high",false,crypto.randomUUID());
let uklidittodo = createTodo("Uklidit", "Musis uklidit","05/04/2026","medium",true,crypto.randomUUID());

let todoarray = JSON.parse(localStorage.getItem('todoarray')) || [uklidittodo,uvarittodo]

const maindiv = document.getElementById("todos")

function saveToLocalStorage(){
    localStorage.setItem('todoarray',JSON.stringify(todoarray));
}

function rendertodos(){
    maindiv.innerHTML = '';
    for (let i = 0; i < todoarray.length; i++){
        creatediv(todoarray[i])
    }

}

function creatediv(array){
    const newtodo = document.createElement("div");
    newtodo.classList.add("tododiv")

    const descriptiondiv = document.createElement("p");
    const textdiv = document.createElement("p");
    const prioritydiv = document.createElement("p");
    const datediv = document.createElement("p");
    const checklistdiv = document.createElement("input");
    checklistdiv.type = "checkbox";

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete"
    deletebtn.classList.add("deletebtn")
    newtodo.appendChild(deletebtn)

    const editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    
    editbtn.addEventListener("click", function(){
        edittodo(array)
        isClosed()
    });
    deletebtn.addEventListener("click", () => deletetodo(array));


    textdiv.textContent = array.name;
    descriptiondiv.textContent = array.description;
    prioritydiv.textContent = array.priority;
    datediv.textContent = array.date;
    checklistdiv.checked = array.checklist;

    textdiv.classList.add("textdiv");
    descriptiondiv.classList.add("descriptiondiv");
    prioritydiv.classList.add("prioritydiv");
    datediv.classList.add("datediv");
    checklistdiv.classList.add("checklistdiv");
    newtodo.appendChild(editbtn);

    if(array.priority === "medium"){
        prioritydiv.style.backgroundColor = "orange";
    }else if(array.priority === "high"){
        prioritydiv.style.backgroundColor = "red";
        
    }else{
        prioritydiv.style.backgroundColor = "grey";
    }

    maindiv.appendChild(newtodo);
    newtodo.appendChild(textdiv);
    newtodo.appendChild(descriptiondiv);
    newtodo.appendChild(prioritydiv);
    newtodo.appendChild(datediv);
    newtodo.appendChild(checklistdiv);

    checklistdiv.addEventListener("change", function(){
        if (checklistdiv.checked){
            array.checklist = true;
        }else{
            array.checklist = false;
        }
    });

}

document.getElementById("inptssend").addEventListener("click", function(){
    addtodo();
    console.log(todoarray)
    saveToLocalStorage();
});

function isClosed(){
    const editcontainer = document.getElementById("editcontainer")
    if (editcontainer.style.display === "none"){
        editcontainer.style.display = "flex";
    }else{
        editcontainer.style.display = "none";
    }
}

document.getElementById("editbtn").addEventListener("click", function(){
    console.log("funguje aspon toto")
    isClosed()
});

function addtodo(){
    const nameinp = document.getElementById("nameinpt").value;
    const description = document.getElementById("descriptioninpt").value;
    const date = document.getElementById("dateinpt").value;

    const priority = document.getElementById("priorityinpt");
    const prioritytext = priority.value


    const checklist = document.getElementById("checklistinpt").checked;
    const id = crypto.randomUUID();
    todoarray.push(createTodo(nameinp,description,date,prioritytext,checklist,id));
    rendertodos();
    saveToLocalStorage();
    

    document.getElementById("nameinpt").value = "";
    document.getElementById("descriptioninpt").value = "";
    document.getElementById("dateinpt").value = "";
    document.getElementById("priorityinpt").value = "";
    document.getElementById("checklistinpt").checked = "";
}
function deletetodo(array){
    for (let i = 0; i < todoarray.length; i++){
        console.log(todoarray[i].id)
        if (todoarray[i].id === array.id){

            console.log("found it")
            todoarray.splice(i,1);
        }
    }
    rendertodos();
    saveToLocalStorage();
}

function edittodo(array){
    const nameinp = document.getElementById("nameinpt").value;
    const descriptioninpt = document.getElementById("descriptioninpt").value;
    const dateinpt = document.getElementById("dateinpt").value;
    const checklistinpt = document.getElementById("checklistinpt").checked;
    const priorityinpt = document.getElementById("priorityinpt").value;

    
}


rendertodos()