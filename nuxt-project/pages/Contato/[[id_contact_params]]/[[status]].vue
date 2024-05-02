<script setup lang="ts">
import CardContactPersonal from '~/components/CardsContacts/CardContactPersonal.vue';
import CardAllContacts from '~/components/CardsContacts/CardAllContacts.vue';
import { contacts, offline } from '~/helpers/DataContacts';

definePageMeta({
  layout: 'custom',
});

const route = useRoute();

const dataAllContacts = route.params.status === 'online' ? contacts : offline;
const title = ref(`Contato ${route.params.id_contact_params && '- ' + dataAllContacts[Number(route.params.id_contact_params)].name}`);

useSeoMeta({
  title,
  description: () => `description: ${title.value}`,
});
</script>

<template>
  <q-page class="row">
    <q-btn
      v-if="route.params.id_contact_params"
      label="Voltar"
      to="/contato"
      icon="arrow_back"
      class="fixed q-mt-sm"
    />

    <div
      v-if="route.params.id_contact_params"
      class="column col-12 justify-center"
    >
      <card-contact-personal
        :id="dataAllContacts[Number(route.params.id_contact_params)].id"
        :name="dataAllContacts[Number(route.params.id_contact_params)].name"
        :email="dataAllContacts[Number(route.params.id_contact_params)].email"
        :letter="dataAllContacts[Number(route.params.id_contact_params)].letter"
        :avatar="dataAllContacts[Number(route.params.id_contact_params)].avatar"
        :status="route.params.status"
        :work="dataAllContacts[Number(route.params.id_contact_params)].work"
        :about="dataAllContacts[Number(route.params.id_contact_params)].about"
      />
    </div>

    <div
      v-else
      class="column col-12 justify-center items-center"
    >
      <card-all-contacts
        :contacts
        :offline
      />
    </div>
  </q-page>
</template>

<style scoped>

</style>
