<script setup>
import { ref } from "vue";

// -- donnée réactive pour la saisie du titre etc.
const titre = ref("");
const qtestock = ref("");
const prix = ref("");

defineProps(["livre"]);
const emit = defineEmits(["searchL"]);

</script>


<template>

  <form @submit.prevent="$emit('searchL', titre, qtestock, prix)">
    <fieldset>
      <legend>Recherche de livres dans la librairie</legend>
      <label for="titre">Mot clé : </label><input id="motcle" type="text" />
      <input type="submit" class="soumettre"/>
    </fieldset>
  </form>
  
</template>


<style scoped>
  
</style>
