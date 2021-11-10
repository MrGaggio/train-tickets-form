/* Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km percorsi (0.21 € al km)

- và applicato uno sconto del 20% per i minorenni

- và applicato uno sconto del 40% per gli over 65

Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo 2 decimali) */




//selezionare gli elementi della DOM

const elementFullName = document.getElementById('full_name')
const elementUserAge = document.getElementById('user_age')
const elementKm = document.getElementById('km')
const elementGenerate = document.getElementById('generate')
const elementCancel = document.getElementById('cancel')



//al click genera il prezzo del biglietto
elementGenerate.addEventListener('click', function () {

    //il programam deve calcolare il prezzo del biglietto in base ai km percorsi e all'età

    const fullName = elementFullName.value
    const user_age = elementUserAge.value
    const km = elementKm.value

    console.log(user_age, km);

    let price


    if (user_age == 'under18') {
        price = km * 2.1 * 0.8
    } else if (user_age == 'over18') {
        price = km * 0.21
    } else if (user_age == 'over65') {
        price = km * 2.1 * 0.6
    }

    console.log(price);

    //Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo 2 decimali) */
    document.getElementById('recap').innerHTML = `
    Hello ${fullName} <br>
    you are ${user_age} <br>
    your distance is ${km} km <br>
    and your final price is € ${price}`

    console.log('recap');
})


//al click cancella tutto
elementGenerate.addEventListener('click', function () {

    elementFullName.value = ''
    elementUserAge.value = 'minorenne'
    elementKm.value = ''
    
})