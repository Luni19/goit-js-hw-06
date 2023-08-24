 
 const decrementButton = document.querySelector('[data-action="decrement"]');
 const incrementButton = document.querySelector('[data-action="increment"]');
 const valueSpan = document.getElementById('value');


 let counterValue = 0;


 function updateInterface() {
   valueSpan.textContent = counterValue;
 }

 
 decrementButton.addEventListener('click', () => {
   counterValue -- ;
   updateInterface();
 });


 incrementButton.addEventListener('click', () => {
   counterValue ++ ;
   updateInterface();
 });

 updateInterface();