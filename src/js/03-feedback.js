import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY_STORAGE = "feedback-form-state";
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');


const object = {};

input.addEventListener('input', throttle ((onInput), 500));


function onInput (){
 object.email = this.value;
 localStorage.setItem(KEY_STORAGE, JSON.stringify(object));
//  download.ipt = JSON.parse(localStorage.getItem(KEY_STORAGE))
 
};


textarea.addEventListener('input', throttle ((onTextarea), 500));

function onTextarea(){
    object.message = this.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(object));
    // download.text = JSON.parse(localStorage.getItem(KEY_STORAGE))
    
};


form.addEventListener('submit', onButton);

    function onButton(evt){
        evt.preventDefault();
        console.log(object); 
        localStorage.clear();
        input.value = '';
        textarea.value = '';
        
    };

function downloadPage(){
    if (JSON.parse(localStorage.getItem(KEY_STORAGE))) {
        const download = JSON.parse(localStorage.getItem(KEY_STORAGE));
    input.value = download.email;
    textarea.value = download.message;
    }
    
} 
downloadPage()

