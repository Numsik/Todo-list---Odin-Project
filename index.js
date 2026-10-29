
function createTodo(name,description,date,priority,checklist){
    return {name,description,date,priority,checklist};
}

let todoarray = [];

let uvarittodo = createTodo("Uvarit", "Musis uvarit","02/04/2026","high",false);
let uklidittodo = createTodo("Uklidit", "Musis uklidit","05/04/2026","medium",true);
todoarray.push(uvarittodo,uklidittodo);

const maindiv = document.getElementById("todos")

function rendertodos(){
    maindiv.innerHTML = '';
    for (let i = 0; i < todoarray.length; i++){
        creatediv(todoarray[i].name,
            todoarray[i].description,
            todoarray[i].date,
            todoarray[i].priority,
            todoarray[i].checklist)
    }

}

function creatediv(name,description,date,priority,checklist){
    const newtodo = document.createElement("div");
    newtodo.classList.add("tododiv")

    const descriptiondiv = document.createElement("p");
    const textdiv = document.createElement("p");
    const prioritydiv = document.createElement("p");
    const datediv = document.createElement("p");
    const checklistdiv = document.createElement("button");

    textdiv.textContent = name;
    descriptiondiv.textContent = description;
    prioritydiv.textContent = priority;
    datediv.textContent = date;
    checklistdiv.textContent = checklist;

    maindiv.appendChild(newtodo);
    newtodo.appendChild(textdiv);
    newtodo.appendChild(descriptiondiv);
    newtodo.appendChild(prioritydiv);
    newtodo.appendChild(datediv);
    newtodo.appendChild(checklistdiv);
}

document.getElementById("inptssend").addEventListener("click", function(){
    addtodo();
});

function addtodo(){
    const nameinp = document.getElementById("nameinpt").value;
    const description = document.getElementById("descriptioninpt").value;
    const date = document.getElementById("dateinpt").value;
    const priority = document.getElementById("priorityinpt").value;
    const checklist = document.getElementById("checklistinpt").value;
    todoarray.push(createTodo(nameinp,description,date,priority,checklist));
    rendertodos();


}

function deletetodo(name){

}


rendertodos()