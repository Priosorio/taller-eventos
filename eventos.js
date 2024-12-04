document.addEventListener('DOMContentLoaded', (event) => {
    
    let buttonContainer = document.getElementById('buttonContainer');
    let boton = document.querySelector('#buttonSaludar');


    boton.addEventListener('click', (event) => {
        alert('Hola!');
        
    
        
    });
    
   
    buttonContainer.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });

});