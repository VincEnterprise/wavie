<template>
  <ListboxOption
    v-slot="{ active, selected }"
    v-for="option in optionsArray"
    :key="option.value"
    :value="option"
    as="template"
  >
    <li class="relative cursor-pointer select-none py-2 pl-10 pr-4'">
      <div
        v-if="selected"
        :class="[active ?? 'opacity-0']"
        class="
          <==SELECTION__CURRENT==>
          <!--📦️-->
          absolute
          -z-1
          inset-0
          p-[3px]
          <!--💄-->
          mask-exclude
          bg-gradient-to-b
          from-yellow-500
          to-yellow-400
          rounded-full
        "
      ></div>
      <div
        :class="[
          active
            ? 'translate-y-0 scale-100 opacity-100 duration-300'
            : ' scale-50 opacity-0 duration-34',
        ]"
        class="
          <==SELECTION__HOVER==>
          <!--📦️-->
          -z-1
          absolute
          inset-0
          <!--💄-->
          shadow-md
          rounded-full
          bg-gradient-to-b
          from-yellow-400
          to-yellow-500
          <!--🚀-->
          will-transform
          origin-left
          ease-button-cubic-1
        "
      ></div>
      <span :class="[selected && 'font-semibold']" class="block truncate">
        {{ option.label }}
      </span>
      <span
        v-if="selected"
        class="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <CheckIcon class="w-5 h-5" aria-hidden="true" />
      </span>
    </li>
  </ListboxOption>
</template>

<script setup lang="ts">
import { defineProps, useContext } from "vue"
import { ListboxOption } from "@headlessui/vue"
import { CheckIcon } from "@heroicons/vue/solid"

const props = defineProps({
  optionsArray: Array,
})
</script>
