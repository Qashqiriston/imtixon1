<template>
  <div>
    <h1 class="heading">Hello Nuxt!</h1>

    <BaseButton @click="onClick">{{ $t("about_company") }}</BaseButton>

    <pre>{{ clearSpaces("+998 99 999 99 99") }}</pre>
  </div>
</template>

<script setup lang="ts">
const { showToast } = useCustomToast();
import type { Sanjar } from "~/types/post"

const sanjar = ref<Sanjar>()

const onClick = () => {
  showToast("Success!", "error");
};
</script>
