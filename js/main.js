const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        // para que "c" borre
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // para que la flecha borre un solo digito y cuando termine deje el cero
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Hehehe-Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            } return;
        }

        // que el boton igual resuelva lo que aparece en la pantalla. La funcion eval evalua los strings y resuelve.
        if (boton.id === "igual") {
            try{
                pantalla.textContent = eval (pantalla.textContent);
            }catch{
                pantalla.textContent = "Hehehe-Error!";
            }            
            return;
        }


        // si en la pantalla es cero y apreto un boton, se borra el cero y queda el boton que aprete, y si sigo apretando mas botones se van agregando
        if (pantalla.textContent === "0" || pantalla.textContent === "Hehehe-Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }


    })
})