// Chauchaut

/*const chauchat = () => {
    for (let i = 1; i < 8; i++){
        const cargador = "pium!";
        let numeroAlAzar = Math.floor(Math.random() * 100); // Un número entre 1 y 100 al azar
        
        if (numeroAlAzar > 80) {
            console.log(cargador);            
            } else {
            console.log("Illo, me he quedao pillá!");
            }  
      if (i%3 === 0){
                console.log('');
              }
    }
};

chauchat();
*/

//Solución aportada en clase

//Chauchau babyyy

const chauchat = () => {
    for (let i = 1; i < 8; i++) {
        const cargador = "pium!";
        let numeroAlAzar = Math.floor(Math.random() * 100); // Un número entre 1 y 100 al azar
        if (numeroAlAzar > 10) {
            console.log(cargador);
        } else {
            console.log("Illo, me he quedao pillá!");
        }
        if (i % 3 === 0) {
            console.log('');
        }
    }
};
chauchat();








 

