let Arr=[];

function takedata(){
    let text =document.querySelector(".todo-input").value;
    let date =document.querySelector(".todo-date").value;
    
    Arr.push({task: text,duedate:date});
    document.querySelector(".todo-input").value='';
    document.querySelector(".todo-date").value='';
    add();
}

function add(){
    let itemcontainer=document.querySelector('.todo-item');
    let newhtml='';
    for(let i=0;i<Arr.length;i++){
        newhtml+=`<div>
        <span>${Arr[i].task}</span>
        <span>${Arr[i].duedate}</span>
        <button class="del-button"  onclick="Arr.splice(${i},1); add()">Delete</button> 
        </div>
        `;
    }
    itemcontainer.innerHTML=newhtml;

}











