<script setup>
import {RouterLink, RouterView} from 'vue-router';
import Header from "./components/Header.vue";
</script>


<template>

  <Header />

  <img alt="Librairie logo" class="logo" height="160" src="@/assets/lumiere.png" width="105"/>
  
  <header>


        <div class="wrapper">

            <nav id="menutop">
                <!-- RouterLink : des liens qui pointent vers le composant à afficher -->
                <!-- Voir la configuration des liens dans router/index.js -->
                <RouterLink to="/livres" class="menu-item">Tous les livres</RouterLink>
                <RouterLink to="/recherche" class="menu-item">Rechercher un livre</RouterLink>
                <RouterLink to="/ajout" class="menu-item">Ajouter un livre</RouterLink>
                <RouterLink to="/gestion" class="menu-item">Gérer le stock</RouterLink>
            </nav>
        </div>
    </header>
    <!-- RouterView : Le composant sélectionné s'affiche ici -->
    <RouterView/>
</template>


<style scoped>

</style>

