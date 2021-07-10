<template>
  <ListboxOption
    v-slot="{ active, selected }"
    :key="option.value"
    :value="option"
    as="template"
  >
    <li class="relative cursor-pointer select-none py-1.5 pr-3 pl-10 sm:py-2 sm:pr-4 sm:tracking-wider focus:outline-none">
      <div
        v-if="selected"
        :class="active && 'opacity-0'"
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
          rounded-2xl
          <!--🚀-->
          duration-1000
        "
      ></div>
      <div
        :class="
          active
            ? 'translate-y-0 scale-100 opacity-100 duration-300'
            : 'scale-50 opacity-0 duration-34'
        "
        class="
          <==SELECTION__HOVER==>
          <!--📦️-->
          -z-1
          absolute
          inset-0
          <!--💄-->
          shadow-md
          rounded-2xl
          bg-gradient-to-b
          from-yellow-400
          to-yellow-500
          text-yellow-900
          <!--🚀-->
          will-transform
          origin-left
          ease-button-cubic-1
        "
      ></div>
      <span
        :class="active && 'text-yellow-900'"
        class="block truncate duration-200"
      >
        {{ option.label }}
      </span>
      <span
        v-if="selected"
        class="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <uil-check :class="active && 'text-yellow-900'" class="duration-200 w-6 h-6" />
      </span>
    </li>
  </ListboxOption>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { Option } from '~/types'

const props = defineProps({
  option: {
    type: Object as PropType<Option>,
    required: true,
  },
})
</script>
