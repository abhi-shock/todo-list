const taskInput = document.getElementById('inp');
const addTaskBtn = document.getElementById('btn');
const taskList = document.getElementById('task-list');
   
addTaskBtn.addEventListener('click', addTask);
function addTask() {
	const task = taskInput.value ;
	if (task == '') {
		alert("enter task please")
	}
	 else {
		const taskitem = document.createElement("li"); 
		
        taskitem.innerHTML=`${task}     <i class="fa fa-trash" aria-hidden="true"></i>` ;
		taskList.appendChild(taskitem);
		taskInput.value = '';




		taskitem.querySelector("i").addEventListener("click", remove);

		 function remove(){
			   taskitem.remove();
		 }
	}
	    


}