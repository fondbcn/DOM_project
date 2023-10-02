const addtask=document.getElementById("add-task")
const taskcontainer=document.getElementById("task-container")
const inputtask=document.getElementById("input-task")
addtask.addEventListener("click",function(){
	let task=document.createElement('div');
	task.classList.add('task');
	let li=document.createElement('li');
	li.innerText=`${inputtask.value}`;
	task.appendChild(li);
	let checkbutton=document.createElement('button');
	checkbutton.innerHTML="Done";
	checkbutton.classList.add("checkTask");
	task.appendChild(checkbutton);
	let deletebutton=document.createElement('button');
	deletebutton.innerHTML="Cancel";
	deletebutton.classList.add("deleteTask");
	task.appendChild(deletebutton);
	if(inputtask.value===""){
		alert("please ha enter ...")
	}
	else{
		taskcontainer.appendChild(task)
	}
	inputtask.value=""
	checkbutton.addEventListener("click",function(){
		checkbutton.parentElement.style.textDecoration="line-through"
	});
	deletebutton.addEventListener("click",function(e){
		let trgt=e.target;
		trgt.parentElement.remove();
	});
})