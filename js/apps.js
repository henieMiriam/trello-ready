var inputListName = document.getElementsByClassName('temp-add-list')[0];

inputListName.addEventListener('click', function(e){
	showCard();
});



var displayListTitle = document.getElementsByClassName('save')[0];
displayListTitle;
console.log(displayListTitle);


displayListTitle.addEventListener('click', function(){

	var inputTitle = document.getElementById('input-list').value;
	console.log(inputTitle);

	if(inputTitle.length == 0 || inputTitle == null) {
		alert('Debes ingresar un nombre de lista');
		return false;
	}

	var title = document.getElementsByTagName('h2')[0];

	title.textContent = inputTitle;

	title.style.display = 'block';


	var getFormAddTitle = document.getElementsByClassName("add-list-form")[0];
	getFormAddTitle.style.display = 'none';
	var getFormAddTask = document.getElementsByClassName("temp-add-task")[0];
	getFormAddTask.style.display = 'block';

	getFormAddTask.addEventListener('click', function(e){
		showFormAddTask();
		getFormAddTask.style.display = 'none';
	});

	var showTask = document.getElementsByClassName('add-button')[0];
	showTask.addEventListener('click', function(){
		showTaskText();
	});

});

function showCard() {
	var taskContainer = document.getElementsByClassName('card-container')[0];
	taskContainer.style.backgroundColor = '#e1e2e4';

	var spanTemp = document.getElementsByTagName('span')[0];
	spanTemp.style.display = 'none';

	var task = document.getElementsByClassName('add-list-form')[0];
	console.log(task);
	task.style.display = 'block';
}

function showFormAddTask(){
	var getFormAddTask = document.getElementsByClassName("add-task-form")[0];
	getFormAddTask.style.display = 'block';

	var focusInputTask = document.getElementsByTagName('textarea')[0];
	focusInputTask.focus();
	console.log(focusInputTask);

}

function showTaskText(){
	var inputText = document.getElementById('input-task');
	var inputTextTask = inputText.value;

	if(inputTextTask.length == 0 || inputTextTask == null) {
		alert('Debes ingresar una tarea');
		return false;
	}

	var addedTaskContainer = document.getElementById('add-task-container');

	var addedTask = document.createElement('p');
	var addedTskText = document.createTextNode(inputTextTask);

	addedTask.appendChild(addedTskText);
	addedTaskContainer.appendChild(addedTask);

	inputText.value = '';

	var getFormAddTask = document.getElementsByClassName("add-task-form")[0];
	getFormAddTask.style.display = 'none';

	var getFormAddTask = document.getElementsByClassName("temp-add-task")[0];
	getFormAddTask.style.display = 'block';

	addedTaskContainer.insertBefore(addedTask, getFormAddTask);


}
