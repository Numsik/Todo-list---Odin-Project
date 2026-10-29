
function createTodo(name,description,date,priority,checklist){
    return {name,description,date,priority,checklist};
}

let todoarray = [
];

let uvarittodo = createTodo("Uvarit", "Musis uvarit","02/04/2026","high",false);
let uklidittodo = createTodo("Uklidit", "Musis uklidit","05/04/2026","medium",true);
todoarray.push(uvarittodo,uklidittodo);

//console.log(todoarray[0].name);
//console.log(todoarray[1].description);

const todoChildDiv = document.getElementById("divchild");
const namediv = document.getElementById("divfortodo");
const descriptiondiv = document.getElementById("tododescription");
const datediv = document.getElementById("tododate");
const prioritydiv = document.getElementById("priority");
const checklistdiv = document.getElementById("checklist");

const maindiv = document.getElementById("todos")

function rendertodos(){

    for (let i = 0; i < todoarray.length; i++){

        const newtodo = document.createElement("div");
        const description = document.createElement("p");
        newtodo.appendChild(description)
        description.textContent = todoarray[i].name;
        maindiv.appendChild(newtodo)

    }

}


function adddiv(name,description,date,priority,checklist){
    namediv.TextContent = name;
    descriptiondiv.TextContent = description;
    datediv.TextContent = date;
    prioritydiv.TextContent = priority;
    checklist ? checklistdiv.textContent = "Not Done" : checklistdiv.textContent = "Done";
    
}
function showtodo(){

}

function deletetodo(name){

}

function addtodo(name){

}
rendertodos()