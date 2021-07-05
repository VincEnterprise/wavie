<template>
  <footer
    class="
          pt-20
          px-4
          text-center
          transition-opacity
          duration-700
          lg:opacity-0
          hover:opacity-100
          focus-within:opacity-100
          focus-visible:opacity-100
        "
  >
    © {{ new Date().getFullYear() }} — {{ t('built-by') }}
    {{ " " }}
    <a href="https://vincenterprise.com">VincEnterprise</a>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
