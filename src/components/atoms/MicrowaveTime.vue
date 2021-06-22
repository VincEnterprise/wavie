<template>
  <div class="<==CLOCK==> flex gap-2">
    <template v-for="character in split" :key="character.id">
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
          text-4xl text-gray-900
          leading-none
        "
      >
        {{ character }}
      </span>
      <transition
        v-else
        mode="out-in"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-y-100"
        leave-to-class="opacity-0 scale-y-90"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-y-90"
        enter-to-class="opacity-100 scale-y-100"
      >
        <span
          :key="character.id"
          class="
            <==CLOCK__NUMBER==>
            <!--📦-->
            flex
            min-h-[56px]
            place-items-center place-content-center
            w-8
            py-2
            lg:p-0
            <!--💄-->
            rounded-xl
            bg-gradient-to-b
            from-gray-100
            via-gray-50
            to-gray-100
            border border-gray-100
            shadow-md
            <!--🅰️-->
            text-4xl text-gray-900
            leading-none
          "
        >
          {{ character }}
        </span>
      </transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, computed } from "vue"

const props = defineProps({
  time: String,
})

// Split each character of the time string into an array
const { time } = toRefs(props)
const split = computed(() => {
  return [...time.value]
})
</script>
