function showItems() {
    document.getElementById("ShowItems").classList.remove("hidden");
}

function Submit() {
    let Nota = 0;
    const correctAnswers = {'River': 2, 'Bones': 1, 'Country': 0, 'Planets': 1, 'Union': 2, 'Counting': 2, 'Light': 0, 'WC': 2, 'Battle': 1, 'ChangeName': 0, 'Capital': 2, 'TajMahal': 0, 'Longest': 2, 'Disaster': 1, 'Mountain': 0, 'Gymnast': 1, 'Spoken': 2, 'Driving': 0, 'Rainbow': 1,  'Rainforest': 2 }  
    const intrebari = Object.keys(correctAnswers); //Array de Chei ->["Nume", "Prenume"]
    intrebari.forEach(intrebare => { 
        let inputValues = document.getElementsByName(intrebare);
        let correct = correctAnswers[intrebare];

        inputValues.forEach((input, index) => {
            if (index === correct) {
                if (input.checked == true) {
                    Nota = Nota + .5;
                }
                input.parentElement.style.border = "1px solid green";
            } else if (input.checked == true) {
                input.parentElement.style.border = "1px solid red";
            }
        });
    });
    if (Nota >= 6) {
        alert ("Congrulations your grade is " + Nota + " , you pass the test" )
    }
    else {
        alert("Your grade is " + Nota + " , you have to practice more")
    }
}



    // console.log(document.getElementsByName("Spoken"));
    // Object.keys(letiabila tip object) returneaza cheile obiectului; ex: let x = {"Nume": Dan, "Prenume": Singeorzan}.
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