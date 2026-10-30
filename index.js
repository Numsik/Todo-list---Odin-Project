
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




    textdiv.textContent = array.name;
    descriptiondiv.textContent = array.description;
    prioritydiv.textContent = array.priority;
    datediv.textContent = array.date;
    checklistdiv.checked = array.checklist;


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