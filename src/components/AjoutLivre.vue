<script setup>
import AjoutForm from "./AjoutForm.vue";


// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/34/livres";


function handlerAdd(titre, qtestock, prix) {
  console.log(titre);
  console.log(qtestock);
  console.log(prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le nouveau livre est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre, qtestock: qtestock, prix: prix }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}

</script>


<template>
    <AjoutForm @addL="handlerAdd"></AjoutForm>
</template>


<style scoped>
</style>
