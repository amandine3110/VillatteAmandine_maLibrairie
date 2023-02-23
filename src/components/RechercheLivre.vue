<script setup>
import { reactive, onMounted } from "vue";
import Livre from "../Livre";
import RechercheForm from "./RechercheForm.vue";

const listeLivres = reactive([]);

// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/34/livres";

function search() {
  const fetchOptions = { method: "GET" };
  let motcle = document.getElementById("motcle").value;
  fetch(url+"?search="+motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des livres
      listeLivres.splice(0, listeLivres.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Livre
      //  et l'ajouter dans la liste listeLivres
      dataJSON.forEach((v) => listeLivres.push(new Livre(v.id, v.titre, v.qtestock, v.prix)));
    })
    .catch((error) => console.log(error));
}

</script>


<template>
    <RechercheForm @searchL="search"></RechercheForm>

    <h3>Résultat de la recherche :</h3>

<tr>
        <th>ID</th>
        <th>Titre</th>
        <th>Quantité en stock</th>
        <th>Prix</th>
      </tr>

<tr v-for="livre of listeLivres" :key="livre.id">
        <td>{{ livre.id }}</td>
        <td>{{ livre.titre }}</td>
        <td>{{ livre.qtestock }}</td>
        <td>{{ livre.prix }}€</td>
</tr>

</template>


<style scoped>

  </style>
