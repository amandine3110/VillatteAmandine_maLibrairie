<script setup>
import { reactive, onMounted } from "vue";
import Livre from "../Livre";
defineProps(["livre"]);
const emit = defineEmits(["deleteL", "increase", "decrease"]);

const listeLivres = reactive([]);

// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/34/livres";

// -- req AJAX pour récupérer les livres
//    et les stocker dans le state listeLivres
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
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

// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
});

</script>


<template>

    <h3>Tableau de gestion des stocks :</h3>

    <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Prix</th>
            <th>Quantité en stock</th>
          </tr>

    <tr v-for="livre of listeLivres" :key="livre.id">
            <td>{{ livre.id }}</td>
            <td>{{ livre.titre }}</td>
            <td>{{ livre.prix }}€</td>
            <td>{{ livre.qtestock }}</td>
            <td> <button @click="$emit('increase', livre)" class="plus">+</button> </td>
            <td> <button @click="$emit('decrease', livre)" class="minus">-</button> </td>
            <td> <button @click="$emit('deleteL', livre.id)" class="bin">Supprimer</button> </td>
            </tr>

</template>


<style scoped>
  
  </style>