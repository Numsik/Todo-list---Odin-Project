
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
        newtodo.classList.add("tododiv")

        const description = document.createElement("p");
        const text = document.createElement("p");
        const priority = document.createElement("p");
        const date = document.createElement("p");
        const checklist = document.createElement("button");

        text.textContent = todoarray[i].name;
        description.textContent = todoarray[i].description;
        priority.textContent = todoarray[i].priority;
        date.textContent = todoarray[i].date;
        checklist.textContent = todoarray[i].checklist;

        maindiv.appendChild(newtodo);
        newtodo.appendChild(description);
        newtodo.appendChild(priority);
        newtodo.appendChild(date);
        newtodo.appendChild(checklist);
    }

}

function creatediv(){
    const newtodo = document.createElement("div");
        newtodo.classList.add("tododiv")

        const description = document.createElement("p");
        const text = document.createElement("p");
        const priority = document.createElement("p");
        const date = document.createElement("p");
        const checklist = document.createElement("button");

        text.textContent = todoarray[i].name;
        description.textContent = todoarray[i].description;
        priority.textContent = todoarray[i].priority;
        date.textContent = todoarray[i].date;
        checklist.textContent = todoarray[i].checklist;

        maindiv.appendChild(newtodo);
        newtodo.appendChild(description);
        newtodo.appendChild(priority);
        newtodo.appendChild(date);
        newtodo.appendChild(checklist);
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