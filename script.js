let task=document.getElementById('task');
let submit=document.getElementById('submit');
let tasklist=document.getElementById('tasklist');
let list=new Array();
let tasks=document.getElementById('tasks');
let newButton;
submit.addEventListener('click',(event)=>{
    if(task.value!=''){
    list.push(task.value);
    newTask=document.createElement('button');
    newTask.textContent=task.value;
    newTask.id=list.length-1;
    tasklist.appendChild(newTask);
    tasks.style.display='grid';
    tasklist.style.display='grid';
    //tasklist.appendChild='<button id="'+(list.length-1)+'">'+task.value+'</button>';
    task.value='';
    }
});