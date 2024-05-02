<script setup lang="ts">
definePageMeta({
  layout: 'desktop',
});

useSeoMeta({
  title: 'Blog',
  description: 'description: Blog',
});

const route = useRoute();
</script>

<template>
  <q-page class="row">
    <div class="flex column items-center col-12">
      <!-- Trazendo vários parâmetros de uma vez sem precisar
           criar várias pastas igual na page Contato, lembrando
           que se tentar colocar index dar error
      -->
      <h5 class="text-center">
        Blog - <br>
        Digite o que quiser na URL para aparacer no objeto abaixo.
        <br>
        <b>Ex: </b>
        <span class="text-grey-8">
          http://localhost:3000/blog/25/teste/qualquercoisa
        </span>
      </h5>

      <q-card
        style="margin: 0 auto; max-width: 500px;"
      >
        <q-card-section>
          {{ route.params }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>

</style>
