<script setup lang="ts">
defineOptions({
  name: 'CardAllContacts',
});

interface ContactInterface {
  id: number;
  name: string;
  email: string;
  letter: string;
  status: string;
  work: string;
  about: string;
}

interface ContactOfflineInterface {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: string;
  work: string;
  about: string;
}

defineProps<{
  contacts?: ContactInterface[];
  offline?: ContactOfflineInterface[];
}>();
</script>

<template>
  <div
    class="q-pa-md"
    style="max-width: 350px"
  >
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>
        Contatos
      </q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item
        v-for="(contact, i) in contacts"
        :key="contact.id"
        v-ripple
        class="q-my-sm"
        clickable
        :to="`/contato/${i}/${contact.status}`"
      >
        <q-item-section avatar>
          <q-avatar
            color="primary"
            text-color="white"
          >
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label
            caption
            lines="1"
          >
            {{ contact.email }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="chat_bubble"
            color="green"
          />
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item-label header>
        Offline
      </q-item-label>

      <q-item
        v-for="(contact, i) in offline"
        :key="contact.id"
        v-ripple
        class="q-mb-sm"
        clickable
        :to="`/contato/${i}/${contact.status}`"
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label
            caption
            lines="1"
          >
            {{ contact.email }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="chat_bubble"
            color="grey"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped>

</style>
