<template>
  <transition
    leave-active-class="will-transform transition ease-in origin-top duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-y-90"
    enter-active-class="will-transform transition ease-out origin-top duration-200"
    enter-from-class="opacity-0 scale-y-90"
    enter-to-class="opacity-100 scale-100"
  >
    <ListboxOptions
      class="
        <==LISTBOX==>
        scroll-smooth
        no-scrollbar
        <!--📦-->
        absolute
        max-h-60
        w-full
        p-2
        sm:p-3
        md:p-4
        mt-2
        sm:mt-4
        overflow-auto
        z-10
        <!--💄-->
        bg-white/90
        border-2 border-gray-100
        backdrop-filter backdrop-blur-lg
        rounded-3xl
        shadow-2xl
        <!--🚀-->
        will-transform
        <!--👇-->
        select-none
        focus:outline-none
      "
    >
      <slot></slot>
    </ListboxOptions>
  </transition>
</template>
