<script setup lang="ts">
import { useOrg } from "../../store";
import { ProductRoute, AddProductRoute } from "../../router";
import SideDrawer from "../components/SideDrawer.vue";
import PMFScoreCard from "./KeyInfoCard/PMFScoreCard.vue";

const orgStore = useOrg();
const orgDetails = orgStore.orgDetails;
if (orgDetails === undefined)
  throw new Error("Org.vue: Org details is undefined");
</script>

<template>
  <div>
    <div class="mb-6 border-b pb-4">
      <SideDrawer />
      <span class="ml-4 text-4xl">Organisation Home</span>
    </div>

    <!-- Org Detail cards -->
    <div class="mx-12 mb-10 border-b border-gray-300 pb-10">
      <p class="mb-6 text-3xl">Org Details</p>

      <div class="flex flex-row gap-x-6">
        <!-- Org name card -->
        <div class="inline-block w-max rounded-lg bg-slate-50 p-4 px-8 shadow">
          <p class="text-sm">Name</p>

          <div class="text-right">
            <p class="text-4xl font-light">
              {{ orgDetails.name }}
            </p>
          </div>
        </div>

        <!-- Org Plan card -->
        <div class="inline-block w-max rounded-lg bg-slate-50 p-4 px-8 shadow">
          <p class="text-sm">Plan</p>

          <div class="text-right">
            <p class="text-4xl font-light">
              {{ orgDetails.plan }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-6">
      <p class="ml-6 text-3xl">
        Products ({{ orgStore.productsArray.length }})
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <router-link
          v-for="product in orgStore.productsArray"
          :key="product.id"
          :to="{ name: ProductRoute.name, params: { productID: product.id } }"
          class="m-6 rounded-lg bg-slate-50 p-6 text-gray-900 shadow"
        >
          <p class="text-4xl">{{ product.name }}</p>

          <div class="text-right">
            <PMFScoreCard class="max-w-min bg-white" :score="product.score" />
          </div>
        </router-link>

        <!-- Create product card button -->
        <router-link
          :to="{ name: AddProductRoute.name }"
          class="m-6 inline-flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-8 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
          :class="{
            'bg-green-600 text-white hover:bg-green-600 hover:text-white':
              orgStore.productsArray.length === 0,
          }"
        >
          <div class="text-2xl">Add a Product</div>
          <svg
            class="h-8 w-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
