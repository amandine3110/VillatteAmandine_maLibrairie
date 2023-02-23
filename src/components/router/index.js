import { createRouter, createWebHistory } from "vue-router";
import TousLesLivres from "../TousLesLivres.vue";
import AjoutLivre from "../AjoutLivre.vue";
import GestionLivre from "../GestionLivre.vue";
import RechercheLivre from "../RechercheLivre.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: "/livres",
      name: "livre",
      component: TousLesLivres,
    },
    {
      path: "/ajout",
      name: "ajout",
      component: AjoutLivre,
    },
    {
      path: "/gestion",
      name: "gestion",
      component: GestionLivre,
    },
    {
      path: "/recherche",
      name: "recherche",
      component: RechercheLivre,
    },
  ],
});

export default router;