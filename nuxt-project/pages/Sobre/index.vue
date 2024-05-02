<script setup lang="ts">
// import { useQuasar } from 'quasar';

// const $q = useQuasar();

// $q.dialog({
//   title: 'Alert',
//   message: 'Some message'
// })

useSeoMeta({
  title: 'Sobre',
  description: 'description: Sobre',
});

const cards = [
  {
    id: 1,
    title: 'Our Changing Planet',
  },
  {
    id: 2,
    title: 'Outher Space',
  },
  {
    id: 3,
    title: 'Deep Sea',
  },
  {
    id: 4,
    title: 'Mysteries of the Past',
  },
  {
    id: 5,
    title: 'Diverse Cultures',
  },
];

const { data } = await useFetch('http://127.0.0.1:8000/api/users_bd');
const { users, total, primeiro, ultimo } = data.value;

console.log(total);
</script>

<template>
  <q-page class="row">
    <div
      class="q-pa-md"
      style="display: grid;
             grid-template-columns: repeat(3, 1fr);
             gap: 10px;
             justify-items: center;
             align-content: center;
      "
    >
      <cards-component
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
        class="col-3 col-lg-3"
        style="height: 100%; width: 80%;"
      />
    </div>
  </q-page>
</template>

<style scoped>

</style>
