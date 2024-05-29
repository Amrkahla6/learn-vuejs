const buttonElm   = document.querySelector('button');
const inputEl     = document.querySelector('input');
const listEl      = document.querySelector('ul');

function addGoal()
{
    const enterValue       = inputEl.value;
    const listItemEl       = document.createElement('li');
    listItemEl.textContent = enterValue;

    listEl.appendChild(listItemEl);

    inputEl.value = '';
}

buttonElm.addEventListener('click',addGoal)