<template>
  <div>
    <!-- <uids-brand-bar height="narrow" class="iowa-bar--full iowa-bar horizontal">
      <h1 class="site-name">
        <NuxtLink to="/">After Class</NuxtLink>
      </h1>
    </uids-brand-bar> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
// @import "~/node_modules/uids/src/assets/scss/reset.scss";
// @import "~/node_modules/uids/src/components/logo/logo.scss";
// @import "~/node_modules/uids/src/components/brand-bar/brand-bar.scss";
@import "~/assets/scss/main.scss";
@import "~/node_modules/@fortawesome/fontawesome-svg-core/styles.css";
</style>
<script setup>
// import { UidsBrandBar } from "uids";<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  // titleTemplate: '%s - After Class | The University of Iowa'
  // ... or as a function
  titleTemplate: (title) => {
    return title
      ? `${title} | After Class - The University of Iowa`
      : "After Class | The University of Iowa";
  },
});
</script>