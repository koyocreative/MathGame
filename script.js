const response = document.querySelector('#response');
const input = document.querySelector('#input');
const status = document.querySelector('.status');

let correct = ''
let sum = '';

function success() {
    status.classList.add('active');

    setTimeout( function() { status.classList.remove('active'); } , 400 );
}

function getMath() {
    
    let num1 = Math.ceil( Math.random() * 10 );
    let num2 = Math.ceil( Math.random() * 10 );

    response.innerHTML = `${num1} + ${num2}`;
    sum = num1 + num2;

}

input.addEventListener('input', function(e) {
   if( e.target.value == sum ) {
       console.log('Bavo Tebro');

       success();
       clear();
       setTimeout( getMath(), 300 );

   } else {
       console.log('Glup si ko kurac');
   }
});

function clear() {
    input.value = '';
}
getMath();