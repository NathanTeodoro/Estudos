// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCytvju7Ki3VtacB2jZZJZWWI2b4j1M3ww",
  authDomain: "colegio-9e699.firebaseapp.com",
  projectId: "colegio-9e699",
  storageBucket: "colegio-9e699.appspot.com",
  messagingSenderId: "877611695941",
  appId: "1:877611695941:web:10fbf88eb37d75b782882c",
  measurementId: "G-KB4Q6HEF5C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

let db = firebase.firestore()

// ler todos os dados da coleção
const turma = 'Turma A'
//
//db.collection('Turma A').get()
//                        .then((snapshot)=>{
//
//                          snapshot.forEach((doc)=>{
//                            console.log(doc.data())
//                          })
//
//                        })
//

//let docRef = db.collection('turma A').doc('Turma A')
//docRef.get().then((doc) => {
//  console.log(doc.data());
//})

//
//db.collection().where('nome',"==", "Nathan").get()
//.then((snapshot)=>{
//                  snapshot.forEach((doc)=>{
//                  let aluno = doc.data();
//                  console.log(aluno.nome)
//                  })
//                }) 
//
//db.collection().where('nome',">", "N")
//.where("nome","<","Zuleica").get()
//.then((snapshot)=>{
//                  snapshot.forEach((doc)=>{
//                  let aluno = doc.data();
//                  console.log(aluno.nome)
//                  })
//                }) 
//
//                
                
//db.collection('Turma A').get()
//.then((snapshot)=>{
//  snapshot.forEach((doc)=>{
//  let k = doc.data();
//  console.log(k)
//  })
//}) 



//db.collection(turma).add({
//  nome: 'Zuleica',
//  sobrenome:'Somerica',
//  notas:{nota1:9.5, nota2:7.5},
//}).then((doc) => {
//  console.log('documento inserido', doc);
//}).catch(err=>{
//  console.log(err)
//})

//add documento

//db.collection(turma).add({
//  nome: 'Maria Heloisa',
//  sobrenome:'Rodrigues',
//  notas:{nota1:9.5, nota2:7.5},
//}).then((doc) => {
//  console.log('documento inserido', doc);
//}).catch(err=>{
//  console.log(err)
//})
                                  // .update() que podemos usar para definir uma atualização
//db.collection(turma).doc('alunoNovo').set(//set() definimos o obj inteiro update() add ou atualizamos um dado
//  {//definimos o id do documento(alunoNovo) e add um novo obj
//    //podemos modificar tambem esses objetos so basta apontar o novo aluno
//  nome: 'Gabriel',
//  sobrenome:'Henrque',
//  notas:{nota1:9.5, nota2:7.5}
//  // no update
//  //{"notas.nota2:9"}
//}
//).then((doc) => {
//  console.log('documento inserido', doc);
//}).catch(err=>{
//  console.log(err)})

// suponhamos que quero unir arrais no doc:
//faltas:firebase.firestore.FieldValue.arrayUnion(value)
//                                    .arrayRemove(value)
//                                    .increment(+n)
//atualizar em tempo real
//docref.onSnapshot((doc)=>{console.log(doc.data().nome);})
//
//deletar
//notas: firebase.firestore.FieldValue.delete(value)
//

let auth = firebase.getAuth()

let newUserEmail = 'nathan992st@gmail.com';
let newUserPassword = 'nathaN123+a'

auth().createUser({
  email: 'nathan992st@gmail.com',
  password :'nathaN123+a'})
.then(userRecord =>{
  console.log(userRecord);
}).catch(error =>{
  console.log(error)
})

function a(){
  getAuth()
  .createUser({
    email: 'user@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });}

  console.log('123')