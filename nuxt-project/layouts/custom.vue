<script setup lang="ts">
import { useDefaultStore } from '~/stores/default';
import DrawerLeft from '~/components/Drawer/DrawerLeft.vue';

const store = useDefaultStore();
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <NuxtLoadingIndicator
      color="red"
      :throttle="0"
      :duration="500"
      :height="10"
    />

    <q-header
      elevated
      class="bg-positive text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="store.leftDrawerOpen = !store.leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Layout Custom
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <drawer-left />

    <q-page-container>
      <NuxtPage />
    </q-page-container>

    <q-footer
      bordered
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="Logo Quasar"
            >
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
