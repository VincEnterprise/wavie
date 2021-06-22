<template>
  <transition-group
    tag="div"
    class="grid grid-cols-1 md:grid-cols-2 gap-8"
    :show="true"
    appear
  >
    <StepPanel
      v-for="{ label, id, value, data, icon } in dropdowns"
      :key="id"
      :icon="icon"
    >
      <Dropdown
        :label="label"
        :id="id"
        :optionsArray="data"
        :initialValue="value"
        @updateOption="handleOptionUpdate"
      />
    </StepPanel>

    <StepPanel :key="3">
      <h2 class="text-gray-700 font-semibold block ml-1 mb-4">
        Tijd van de magnetron:
      </h2>
      <div class="flex flex-grow flex-wrap gap-4">
        <MicrowaveTime :time="microwaveTime" />
        <Toggle  @updateToggle="handleToggleUpdate" />
      </div>
    </StepPanel>
  </transition-group>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { wattages, times, convertToMMSS } from "./data.js"

//
// ─── SET DATA FOR 3 DROPDOWNS ───────────────────────────────────────────────────
//
const dropdowns = ref([
  {
    id: 0,
    value: 700,
    data: wattages,
    icon: "LightningBoltIcon",
    label: "Wattage van de verpakking:",
  },
  {
    id: 1,
    value: 360,
    data: times,
    icon: "ClockIcon",
    label: "Tijd van de verpakking:",
  },
  {
    id: 2,
    value: 900,
    data: wattages,
    icon: "LightningBoltIcon",
    label: "Wattage van de magnetron:",
  },
])

//
// ─── HANDLE WHEN A NEW DROPDOWN OPTION IS PICKED ────────────────────────────────
//
function handleOptionUpdate({ id, value }) {
  dropdowns.value[id].value = value
}

//
// ─── ROUND OFF MICROWAVETIME ────────────────────────────────────────────────────
//
const rounded = ref(true)

function handleToggleUpdate(bool) {
  rounded.value = bool
}

//
// ─── CALCULATE MICROWAVE TIME ───────────────────────────────────────────────────
//
const [packageWattage, packageTime, microwaveWattage] = dropdowns.value
const microwaveTime = computed(() => {
  let hour = false // Most microwaveTimes are under 1 hour.

  // Divide package time by ( microwave wattage / package wattage )
  // i.e. 360 seconds  / ( 900 watt / 700 watt ) = 280 seconds
  let microwaveTime = packageTime.value / (microwaveWattage.value / packageWattage.value)
  microwaveTime = Math.round(microwaveTime)

  // If the microwaveTime is over 3600, hour is true.
  if (3600 <= microwaveTime) hour = true

  // Round the value to the nearest 5 seconds increment.
  if (true === rounded.value) microwaveTime = Math.ceil(microwaveTime / 5) * 5

  // Use convertToMMSS to format a JS date string.
  return convertToMMSS(microwaveTime, false, hour)
})
</script>
