<script setup lang="ts">
import type { NuxtError } from "#app";

defineOptions({
  name: "ErrorNotFound",
});

const props = defineProps({
  error: Object as () => NuxtError,
});

const title = ref(`Página ${props.error?.url} não encontrada`);

useSeoMeta({
  title,
  description: () => `description: ${title.value}`,
});
</script>

<template>
  <div
    class="fullscreen bg-dark text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh" class="text-primary">
        {{ error?.statusCode }}
      </div>

      <div class="text-h2 text-primary" style="opacity: 0.4">
        Oops. Não há nada aqui - {{ error?.url }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        href="/"
        label="Ir para Home"
        no-caps
      />
    </div>
  </div>
</template>
