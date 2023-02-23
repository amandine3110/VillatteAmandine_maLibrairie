<script setup>
import { ref } from "vue";

// -- donnée réactive pour la saisie du titre etc.
const titre = ref("");
const qtestock = ref("");
const prix = ref("");

defineProps(["livre"]);
const emit = defineEmits(["addL"]);

</script>


<template>

  <h3>Formulaire d'ajout de livres :</h3>

  <form @submit.prevent="$emit('addL', titre, qtestock, prix)">
    <input type="text" v-model="titre" placeholder="Titre ?" />
    <input type="number" v-model="qtestock" placeholder="Quantité ?" min="0"/>
    <input type="number" v-model="prix" placeholder="Prix ?" min="0"/>
    <input type="submit" class="valider" value="Valider" />
  </form>
  
</template>


<style scoped>
</style>
