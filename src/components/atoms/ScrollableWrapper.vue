<template>
  <div
    class="relative flex flex-auto w-full h-full min-h-0 "
  >
    <div class="absolute pointer-events-none inset-x-0 top-0 h-10 bg-gradient-to-b from-white/90 to-transparent z-20">
    </div>
    <slot></slot>
    <div class="absolute pointer-events-none inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white/90 z-20">
    </div>
  </div>
</template>
