<script setup lang="ts">
defineOptions({
  title: 'Sobre',
});

defineProps<{ id?: number; title?: string }>();
</script>

<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg">

    <q-card-section>
      <div class="text-h6">
        Our Changing Planet
      </div>
      <div class="text-subtitle2">
        by John Doe
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ title }}
    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>
