let task=document.getElementById('task');
let submit=document.getElementById('submit');
let tasklist=document.getElementById('tasklist');
let list=new Array();
let tasks=document.getElementById('tasks');
let newButton;
submit.addEventListener('click',(event)=>{
    if(task.value!=''){
    list.push(task.value);
    newButton=document.createElement('button');
    newButton.textContent=task.value;
    newButton.id=list.length-1;
    tasklist.appendChild(newButton);
    //tasklist.appendChild='<button id="'+(list.length-1)+'">'+task.value+'</button>';
    task.value='';
    }
});