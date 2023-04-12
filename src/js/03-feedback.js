import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY_STORAGE = "feedback-form-state";


const object = JSON.parse(localStorage.getItem(KEY_STORAGE))||{};


form.addEventListener('input', throttle ((onInput), 500));


function onInput (evt){
    const emailValue = form.email.value;
    const messageValue = form.message.value;
    object.email = emailValue;
    object.message = messageValue;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(object))
};



form.addEventListener('submit', onButton);

    function onButton(evt){
        evt.preventDefault();
        if(JSON.parse(localStorage.getItem(KEY_STORAGE)))
        {console.log(object); 
        localStorage.clear();
        form.email.value = '';
        form.message.value = '';}
        else{
        alert ('Заповніть поля')
    }
        
    };

function downloadPage(){
    if(object){
    form.email.value = object.email || '';
    form.message.value = object.message || '';
    } 
} 
downloadPage()

