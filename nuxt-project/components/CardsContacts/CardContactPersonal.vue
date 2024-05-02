<script setup lang="ts">
defineOptions({
  name: 'CardContactPersonal',
});

defineProps<{
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
  status?: string | string[];
  work?: string;
  about?: string;
  letter?: string;
}>();
</script>

<template>
  <q-card
    class="my-card"
    flat
    bordered
    style="max-width: 400px; margin: 0 auto;"
  >
    <!--  {{  }} -->
    <q-item>
      <q-item-section avatar>
        <q-avatar v-if="status === 'offline'">
          <img
            :src="`https://cdn.quasar.dev/img/${avatar}`"
            alt="Contato"
          >
        </q-avatar>

        <q-avatar
          v-else
          color="primary"
          text-color="white"
        >
          {{ letter }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          {{ name }} - {{ id }}
        </q-item-label>
        <q-item-label caption>
          {{ email }}
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section class="text-bold text-grey-7">
        {{ work }}
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="col-10">
        {{ about }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>
