let btnLeggi, txtFile;

btnLeggi = document.querySelector("#btn1")
btnFetch = document.querySelector("#btn2")
txtFile = document.querySelector("input[type=file]")

btnLeggi.addEventListener("click", leggiFile1.bind(txtFile, "ciao"))
btnFetch.addEventListener("click", leggiFile2)



/*.bind(contesto, EVENTUALI PARAMETRI PRESENTI NELLA FUNZIONE)

il bind ci permette di cambiare il contesto,
 se gli passo il this, cambia il contesto del bottone 
 e non è piu il bottone stesso ma la window
 se metto invece come primo parametro una variabile, 
 il .this diventa quella vairabile di riferimento

*/

/*
    function(){         ()=>{

    }                   }

    il ()=> mette come contesto il dove si trova laddeventlistner, con il function è il chiamante
*/

//contesto: per esempio se faccio this trovo la window, se faccio this dentro la  funzione di un click di un bottone, trovo il bottone



function leggiFile1(s) {
    console.log(this)
    console.log(s)
    //console.log(this.value) //ci da il percorso in questo caso, lo fa per motivi di privacy


    let reader = new FileReader();
    /*
    CHIAMATA ASINCRONA (non so quando verra' intercettato l'evento)
    Associo all'evento onload la funzione fineLettura in modo tale che venga richiamata
    quando e' stato completato il caricamento (on load) del file
    */
   //Sincronizzo flusso principale con quello secondario avviato da readAsdataUrl tramite callback
    reader.onload = fineLettura; //il fineLettura viene chiamato quando ha finito di leggere il file
    /*
    CHIAMATA SINCRONA con al suo interno una CHIAMATA ASINCRONA
    Avvia la procedura che carica il file, questa non so con certezza quando finira',
    inoltre, non e' una funzione scritta da me, ma e' una funzione di sistema.
    */
    
    reader.readAsDataURL(this.files[0]); //è una chiamata sincrona che nasconde al suo interno una chiamata di sistema ASINCRONA
    alert("lettura avviata")


    function fineLettura(e) {
        console.log(e)
        alert("file letto")
        //prendo i dati
        let datiFile = e.target.result;
        //separo i dati dall'intestazione
        let stringa = datiFile.split(",")[1];

        /******atob - decodifica la base 64 perchè il result è in base 64******/
        alert(atob(stringa)); 
    }

}

function leggiFile2(){
    //fetch => prendere file, mandare e ricevere info sul server ASINCRONA non sappiamo quando termina
    let dati = fetch("dati.json")
    console.log(dati)
}