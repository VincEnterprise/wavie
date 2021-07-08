<template>
  <Listbox v-slot="{ open }" v-model="selectedOption">
    <ListboxLabel class="label">
      <component :is="labelIcon" class="label__icon" />
      {{ label }}
    </ListboxLabel>
    <div class="relative">
      <DropdownButton class="group select-none">
        <span class="block text-left sm:tracking-wider truncate">{{ selectedOption.label }}</span>
        <span
          class="
            <==BUTTON-INNER==>
            <!--📦️-->
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:pr-3
            <!--👇-->
            pointer-events-none
          "
        >
          <div
            class="
              <==BUTTON-INNER__EXPAND-BUTTON==>
              <!--📦️-->
              relative
              w-7
              h-7
              sm:w-8
              sm:h-8
              overflow-hidden
              <!--💄-->
              bg-gradient-to-t
              from-gray-200
              to-gray-100
              rounded-xl
              shadow-sm
            "
          >
            <div
              class="
                <==BUTTON-INNER__EXPAND-BUTTON--HOVER==>
                <!--📦️-->
                absolute
                inset-0
                <!--💄-->
                bg-gradient-to-t
                from-yellow-500
                to-yellow-400
                rounded-xl
                <!--🚀-->
                opacity-0
                duration-400
                ease-button-cubic-1
                <!--👇-->
                group-hover:opacity-100 group-focus-visible:opacity-100
              "
            ></div>
            <uil-angle-down
              :class="open ? 'rotate-180 duration-400' : 'duration-200'"
              class="absolute w-full h-full will-transform text-gray-600 duration-400
                      ease-button-cubic-1 group-hover:text-yellow-900"
            />
          </div>
        </span>
      </DropdownButton>

      <DropdownOptions>
        <DropdownOption :options-array="optionsArray" />
      </DropdownOptions>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmit, computed } from 'vue'
import type { PropType } from 'vue'
import IconBolt from 'virtual:vite-icons/uil/bolt'
import IconClock from 'virtual:vite-icons/uil/clock'
import type { Option } from '~/types'

const emit = defineEmit(['update-option'])

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  initialValue: {
    type: Number,
    required: true,
  },
  optionsArray: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
})
const { id, initialValue, optionsArray, icon } = props

const labelIcon = computed(() => {
  if (icon === 'uil-bolt') return IconBolt
  if (icon === 'uil-clock') return IconClock
  return false
})

// Find the index in optionsArray where initialValue is located
const initialPos = optionsArray.map((option: Option) => option.value).indexOf(initialValue)
const selectedOption = ref(optionsArray[initialPos])

// Send selectedOption to ConverterGroup.vue
watch(selectedOption, (selectedOption: Option) => {
  emit('update-option', {
    optionValue: selectedOption.value,
    dropdownId: id,
  })
})
</script>
