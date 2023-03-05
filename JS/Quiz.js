function showItems () {
    document.getElementById("ShowItems").classList.remove("hidden");
    
}

function Submit() {
    // console.log(document.getElementsByName("Spoken"));
    // Object.keys(variabila tip object) returneaza cheile obiectului; ex: var x = {"Nume": Dan, "Prenume": Singeorzan}.
    // intrebari.forEach(intrebare => ) -> itereaza prin fiecare element al array-ului de intrebari, adica intrebarile fiind: Spoken, Rainforest.
    // inputValues in cazul de fata contine toate raspunsurile din categoria name "Spoken".
    // correctAnswers.Spoken = 2
    // correctAnswers['Spoken'] = 2
    // correctAnswers.intrebare este echivalent cu correctAnswers['intrebare'].
    // let correct = correctAnswers[intrebare] = cheia Spoken cu valoarea 2.
    // correctAnswers.intrebare se transforma in string si nu returneaza nimic deoarece nu exista cheia intrebare pe care el o cauta.


    //     if (inputValues[correct].checked == true) {
    //         console.log(intrebare + ' corect')
    //     }
    //     else console.log(intrebare + ' incorect')
    // });
    //  De la if: Acesta reprezinta faptul ca inputValues este categoria din namem "Spoken",
    // iar[correct] in parantezele patrate se afla raspunsul corect / valoarea raspunsului corect si .checked verifica daca userul a selectat raspunsul acesta corect
    // si == true inseamna verifica daca l-a selectat.
    // console.log sau alert (intrebare + stringul 'corect' sau 'incorect') semnifica daca userul a raspuns corect sa ii alerteze ca e corect sau incorect.
    let Nota = 0;
    const correctAnswers = {'River': 2, 'Bones': 1, 'Country': 0, 'Planets': 1, 'Union': 2, 'Counting': 2, 'Light': 0, 'WC': 2, 'Battle': 1, 'ChangeName': 0, 'Capital': 2, 'TajMahal': 0, 'Longest': 2, 'Disaster': 1, 'Mountain': 0, 'Gymnast': 1, 'Spoken': 2, 'Driving': 0, 'Rainbow': 1,  'Rainforest': 2 }  
    const intrebari = Object.keys(correctAnswers); //Array de Chei ->["Nume", "Prenume"]
    intrebari.forEach(intrebare => { 
        let inputValues = document.getElementsByName(intrebare);
        let correct = correctAnswers[intrebare];
        if (inputValues[correct].checked == true) {
            Nota = Nota + .5
        }
        
    });
    if (Nota >= 6) {
        alert ("Congrulations your grade is " + Nota + " , you pass the test" )
    }
    else {
        alert("Your grade is " + Nota + " , you have to practice more")
    }
}

// My games with JS down 

// function Test() {

//     let spanac = ["Capsuna", "Banana", "Mere"];
    
//     for (let i = 0; i < 3; i++) {
//         console.log(spanac[i])
//         if (spanac[i] === "Banana") {
//              spanac = ["Ananas"];
//         }
//         else {
//             spanac = "Jitura";
//         }
        
//     } 
//    console.log(spanac);
   
// }
// Test();

// function Another() {
//     let branza = [{ 'name': 'Dan' }, { 'name': 'Adrian' }];
//     for (let i = 0; i < 2; i++) {
//         if (branza[i].name === 'Dan') {
//             console.log(branza[i].name);
            
//         }
//     }
    
// }

// Another();

// function Alay(Garay) {
//     let nrMare = Garay[0];
//     let nrMic = Garay[0];
//     for (let i = 0; i < Garay.length; i++) {
//         if (nrMare < Garay[i]) {
//             nrMare = Garay[i];

//         }

//         if (nrMic > Garay[i]) {
//             nrMic = Garay[i];
//         }

      
//     }
//     return {
//         Mare: nrMare,
//         Mic:  nrMic
//     }
// }

// console.log(Alay([1, 15, -10, 89]));
console.log("N LA PUTEREA A DOUA");
function Putere(n) {

    let produs = 2;
    for (let i = 0; i < n; i++) {
        produs = produs * 2;
    }
    
    return {
         produs
     }
}
console.log("CARACTERE A: ")
function Determine(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {

        if (str[i] === 'a') {
            count++;
        }
        
    }
    console.log(count);
    
}





