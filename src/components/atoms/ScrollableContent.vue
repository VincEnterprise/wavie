<template>
  <div
    class="
        scroll-smooth
        no-scrollbar
        flex
        flex-auto
        flex-col
        w-full
        min-h-0
        overflow-x-hidden
        overflow-y-auto
        px-2
        sm:px-3
        md:px-4 "
  >
    <div class="z-40 flex-shrink-0 w-full h-2 sm:h-3 md:h-4 transform-gpu">
    </div>
    <slot></slot>
    <div class="z-40 flex-grow flex-shrink-0 w-full h-2 sm:h-3 md:h-4 transform-gpu">
    </div>
  </div>
</template>
