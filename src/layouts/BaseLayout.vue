<script setup lang="ts">
import AppFooter from '@/components/global/AppFooter.vue';
import AppNav from '@/components/global/AppNav.vue';

</script>

<template>
  <div>
    <header>
      <AppNav />
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>