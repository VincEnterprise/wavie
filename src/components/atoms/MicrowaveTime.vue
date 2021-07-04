<template>
  <div class="<==CLOCK==> flex gap-1">
    <template v-for="(character, index) in split" :key="index">
      <span
        v-if="':' === character"
        class="
          <==CLOCK__COLON==>
          animate-fade
          <!--📦-->
          flex
          min-h-[56px]
          place-items-center place-content-center
          h-full
          py-2
          lg:p-0
          <!--🅰️-->
          text-3xl text-gray-800
          leading-none
        "
      >
        {{ character }}
      </span>

      <transition
        v-else
        mode="out-in"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-x-100"
        leave-to-class="opacity-0 scale-x-1/4"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-x-1/4"
        enter-to-class="opacity-100 scale-x-100"
      >
        <span
          :key="character"
          class="
              <==CLOCK__NUMBER==>
              <!--📦-->
              relative
              flex
              min-h-[56px]
              place-items-center place-content-center
              w-9
              <!--💄-->
              rounded-xl
              bg-gradient-to-b
              from-gray-700
              via-gray-600
              to-gray-700
              border border-gray-100
              shadow-md
              <!--🅰️-->
              text-3xl text-white
              leading-none
              <!--🚀-->
              will-transform
            "
        >
          {{ character }}
        </span>
      </transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, computed } from 'vue'

const props = defineProps({
  time: { type: String, required: true },
})
const { time } = toRefs(props)

// Split each character of the time string into an array
const split = computed(() => {
  return [...time.value]
})
</script>
