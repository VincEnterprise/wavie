<template>
  <transition
    leave-active-class="transition duration-100 ease-in"
    leave-from-class="opacity-100 scale-y-100"
    leave-to-class="opacity-0 scale-y-90"
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-y-90"
    enter-to-class="opacity-100 scale-y-100"
  >
    <ListboxOptions
      class="
        <==LISTBOX==>
        scroll-smooth
        no-scrollbar
        <!--📦-->
        absolute
        max-h-60
        w-full
        p-4
        mt-2
        sm:mt-4
        overflow-auto
        z-10
        <!--💄-->
        bg-white/90
        border-2 border-gray-100
        backdrop-filter backdrop-blur-lg
        rounded-3xl
        shadow-2xl
        <!--🚀-->
        will-transform
        <!--👇-->
        focus:outline-none
      "
    >
      <slot></slot>
    </ListboxOptions>
  </transition>
</template>

<script setup lang="ts">
import { ListboxOptions } from '@headlessui/vue'
</script>
