<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'description: Home',
});

const runtimeConfig = useRuntimeConfig();
//
// if (import.meta.client) {
//   console.log(runtimeConfig.public.apiBase);
// }
// else {
//   console.log(runtimeConfig.apiSecret);
// // apiSecret Irá aparecer no terminal da IDE
// }

interface ProductInterface {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

const { pending, data: products } = await useFetch(`${runtimeConfig.public.apiBase}/products`, {
  lazy: true,
});
</script>

<template>
  <q-page class="row">
    <!--  <NuxtLink to="/sobre"> -->
    <!-- Ir para Sobre -->
    <!-- </NuxtLink> -->
    <template v-if="pending">
      <q-inner-loading
        showing
        label="Carregando..."
        label-class="text-primary"
        label-style="font-size: 1.1em"
      />
    </template>

    <template v-else>
      <div
        class="col-12 q-pa-md q-gutter-y-md"
      >
        <template
          v-for="(product) in products"
          :key="product.id"
        >
          <q-card
            class="my-card"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section
                class="column q-pt-xs"
                style="flex: 8"
              >
                <div class="text-overline ">
                  {{ product.title }}
                </div>
                <div
                  style="flex: 9;"
                  class="column justify-center"
                >
                  <div class="text-h5 q-mt-sm q-mb-xs text-capitalize">
                    {{ product.category }}
                  </div>
                  <div class="text-caption text-grey">
                    {{ product.description }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section
                class="col-5 flex justify-end"
                style="flex: 2"
              >
                <q-img
                  class="rounded-borders"
                  :src="product.image"
                  style="max-width: 200px; max-height: 200px;"
                  fit="contain"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn
                flat
                round
                icon="event"
              />
              <q-rating
                v-model="product.rating.rate"
                max="5"
                size="sm"
                color="yellow"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
              />
              <q-btn
                flat
                color="primary"
              >
                Reserve
              </q-btn>
            </q-card-actions>
          </q-card>
        </template>
      </div>
    </template>
  </q-page>
</template>
