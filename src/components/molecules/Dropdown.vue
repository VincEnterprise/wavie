<template>
  <Listbox v-slot="{ open }" v-model="selectedOption">
    <ListboxLabel class="ml-4 text-gray-700 font-semibold">
      {{ label }}
    </ListboxLabel>
    <div class="relative mt-4">
      <DropdownButton class="group">
        <span class="block text-left truncate">{{ selectedOption.label }}</span>
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
              rounded-full
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
                rounded-full
                <!--🚀-->
                opacity-0
                duration-400
                ease-button-cubic-1
                <!--👇-->
                group-hover:opacity-100 group-focus-visible:opacity-100
              "
            ></div>
            <ChevronDownIcon
              :class="open ? `rotate-180 duration-400` : `duration-200`"
              class="absolute inset-0 will-transform ease-button-cubic-1 text-white"
              aria-hidden="true"
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
import { ref, watch, defineProps, defineEmit } from 'vue'
import { Listbox, ListboxLabel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const emit = defineEmit(['update-option'])

const props = defineProps({
  id: { type: Number, required: true },
  initialValue: { type: Number, required: true },
  optionsArray: { type: Object, required: true },
  label: { type: String, required: true },
})
const { id, initialValue, optionsArray } = props

// Find the index in optionsArray where initialValue is located
const initialPos = optionsArray.map(index => index.value).indexOf(initialValue)
const selectedOption = ref(optionsArray[initialPos])

watch(selectedOption, (option: Object) => {
  emit('update-option', {
    value: option.value,
    id,
  })
})
</script>
