<script setup lang="ts">
import { essentialLinks } from '~/helpers/essentialLinks';
import { useDefaultStore } from '~/stores/default';

defineOptions({
  name: 'DrawerLeft',
});

const store = useDefaultStore();
</script>

<template>
  <q-drawer
    v-model="store.leftDrawerOpen"
    show-if-above
    bordered
  >
    <q-list>
      <q-item-label
        header
      >
        Links da Plataforma
      </q-item-label>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<style scoped>

</style>
