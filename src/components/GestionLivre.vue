<script setup>
import GestionTab from "./GestionTab.vue";


// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/34/livres";

function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id du livre à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}

function handlerIncrease(livre) {
    console.log(livre);
  // -- augmenter la quantite en stock du livre
  livre.increase();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la quantite modifiée est envoyée au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({'id':livre.id,'titre':livre.titre,'qtestock':livre.qtestock,'prix':livre.prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des livres
      getLivres();
    })
    .catch((error) => console.log(error));
}

function handlerDecrease(livre) {
    console.log(livre);
  // -- diminuer la quantité en stock du livre
  livre.decrease();
  
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la quantite modifiée est envoyée au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({'id':livre.id,'titre':livre.titre,'qtestock':livre.qtestock,'prix':livre.prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      if (livre.qtestock==0) {
    handlerDelete(livre.id);
  } 
      // actualiser la liste des livres
      getLivres();
    })
    .catch((error) => console.log(error));
}

</script>


<template>
    <GestionTab
      
      @deleteL="handlerDelete"
      @increase="handlerIncrease"
      @decrease="handlerDecrease"
    />
</template>


<style scoped>
</style>
