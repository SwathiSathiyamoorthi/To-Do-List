let Task=document.getElementById('task');
let TaskContainer=document.getElementById('task-container');
function AddTask(){
    if(Task.value==''){
        alert("You must type something!!!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=Task.value;
        TaskContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    Task.value="";
    saveData();
}
TaskContainer.addEventListener('click',function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    
},false)
function saveData(){
    localStorage.setItem("data",TaskContainer.innerHTML);
}
function displayData(){
    TaskContainer.innerHTML=localStorage.getItem("data");
}
displayData();