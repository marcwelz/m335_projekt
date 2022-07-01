
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { ref, onValue, push, remove } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
//..
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);



// Expenses Observer -------
// Der Lesezugriff erfolgt auf dem Observer der auf den Listener von Firebase reagiert
let observerList = []
export const registerObserver = (name, observer) => {
  observerList.push({name, observer})
}
export const unregisterObserver = (name) => {
  observerList = observerList.filter(o => o.name === name)
}
const informObservers = (data) => {
  observerList.forEach(o => o.observer(data))
}

onValue(ref(db, "/expenses"), (querySnapShot) => {
  let tmpArray = []
  querySnapShot.forEach(child => { tmpArray.push( { key:child.key, val: child.val() }) })
  console.log(tmpArray)
  informObservers(tmpArray)
})


export const addNewExpense = (expense) => {
  push(ref(db, '/expenses'), expense)
    .then(r => console.log(r))
}


export const delExpense = (expense) => {
  remove(ref(db, '/expenses/'+ expense.key))
    .then(r => console.log("delExpense", r))
}
