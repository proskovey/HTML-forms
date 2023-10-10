const mainPoint = document.querySelector('.interests_main');

const listFood = mainPoint.firstElementChild.firstElementChild;
const listAnim = listFood.nextElementSibling;

const food = Array.from(listFood.getElementsByClassName('interest__check')); 
const animals = Array.from(listAnim.getElementsByClassName('interest__check')); 

food[0].addEventListener('change', ()=>{
	if (food[0].checked){
		food[1].checked = true;
		food[2].checked = true;
	}
	else
	{
		food[1].checked = false;
		food[2].checked = false;
	}
});

animals[0].addEventListener('change', ()=>{
	if (animals[0].checked){
		animals[1].checked = true;
		animals[2].checked = true;
	}
	else
	{
		animals[1].checked = false;
		animals[2].checked = false;
	}
});