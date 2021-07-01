<template>
  <SwitchGroup
    as="div"
    class="
      <==TOGGLE__GROUP==>
      select-none
      self-end
      inline-flex
      flex-1
      flex-wrap
      items-center
      gap-2
      mb-0.5
      focus:outline-none
      focus-visible:ring-4
    "
  >
    <SwitchLabel active class="<==TOGGLE__LABEL==> cursor-pointer">
      {{ t("toggle.rounded") }}
    </SwitchLabel>
    <Switch
      v-model="enabled"
      :class="
        enabled ? 'from-green-500 to-green-700' : 'from-gray-300 to-gray-200'
      "
      class="
        <==TOGGLE==>
        <!--📦-->
        relative
        inline-flex
        flex-shrink-0
        h-6
        w-16
        <!--💄-->
        bg-gradient-to-r bg-origin-border-box
        border-2 border-transparent
        rounded-full
        shadow-md
        <!--🚀-->
        transition-colors
        ease-in-out
        duration-200
        <!--👇-->
        cursor-pointer
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-opacity-75
      "
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-10' : 'translate-x-0'"
        class="
          <==TOGGLE__CIRCLE==>
          <!--📦-->
          inline-block
          h-5
          w-5
          <!--💄-->
          rounded-full
          bg-white
          border-gray-200
          shadow-lg
          ring-0
          <!--🚀-->
          will-transform
          transition
          ease-button-cubic-1
          duration-200
          <!--👇-->
          pointer-events-none
        "
      />
    </Switch>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmit } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({ initialValue: { default: true, type: Boolean } })
const emit = defineEmit(['update-toggle'])

const { initialValue } = props
const enabled = ref(initialValue)

watch(enabled, (bool) => {
  emit('update-toggle', bool)
})
</script>
