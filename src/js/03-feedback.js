import throttle from "lodash.throttle";

const KEY_STORAGE = "feedback-form-state";
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');



const object = {};



input.addEventListener('input', throttle ((onInput), 500));


function onInput (){
 object.email = this.value;
 localStorage.setItem(KEY_STORAGE, JSON.stringify(object));
};


textarea.addEventListener('input', throttle ((onTextarea), 500));

function onTextarea(){
    object.message = this.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(object));
};

button.addEventListener('click', onButton);

function onButton(evt){
    evt.preventDefault();
    console.log(object);
    localStorage.clear();
    input.value = '';
    textarea.value = '';
};











    





