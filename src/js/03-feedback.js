import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
// console.log(form);
const KEY_STORAGE = "feedback-form-state";
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');


// const download = {};

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

// function downloadPage(){
//     input.value = ipt.email
//     textarea.value = text.message
// }
// downloadPage()


form.addEventListener('submit', onButton);

    function onButton(evt){
        evt.preventDefault();
        console.log(object);
        
        localStorage.clear();
        input.value = '';
        textarea.value = '';
        
    };

function downloadPage(){
    const download = JSON.parse(localStorage.getItem(KEY_STORAGE));
    input.value = download.email;
    textarea.value = download.message;
} 
    downloadPage()






// ----------------------------------------------------

// import throttle from 'lodash.throttle';
// /*import '../css/common.css';
// import '../css/03-feedback.css';*/

// const form = document.querySelector(.feedback-form);
// console.log(form)
// form.addEventListener(input, throttle(onInput, 500));
// //застосовую throttle - контролює кількість разів, яку функція може бути викликана протягом певного проміжку часу
// form.addEventListener(submit, onSubmit);

// let LOCALSTORAGE_KEY = "feedback-form-state";

// let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))  {};
// //parse дані з localStorage по ключу LOCALSTORAGE_KEY, а якщо їх немає, по дефолту пустий об"єкт

// const { email, message } = form.elements;
// //console.log(form.elements) [input, textarea, button, email: input, message: textarea]


// function onInput() {
//   dataForm = { email: email.value, message: message.value };
//   //console.log(dataForm)// збередження даних, що ввів користувач
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
//   //запис до localStorage з ключем LOCALSTORAGE_KEY, значення перетвор в JSON
//    console.log(localStorage)
// }

// //Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// function downloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email  ``;
//   //  console.log(dataForm.email)
//     message.value = dataForm.message  ``;
//   //  console.log(dataForm.message)
//   }  
// }
// downloadPage();

// //Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// function onSubmit(e) {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === ''  message.value === '') {
//         return alert('Всі поля повинні бути заповнені')
//   }

//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   e.currentTarget.reset();
  
// }
















    





