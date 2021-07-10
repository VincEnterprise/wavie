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
        <!--📦-->
        absolute
        h-52
        md:h-60
        w-full
        mt-2
        sm:mt-4
        z-10
        overflow-hidden
        <!--💄-->
        bg-white
        border-2 border-gray-100
        rounded-3xl
        shadow-3xl
        <!--🚀-->
        will-transform
        <!--👇-->
        select-none
        focus:outline-none
      "
    >
      <ScrollShadows>
        <slot></slot>
      </ScrollShadows>
    </ListboxOptions>
  </transition>
</template>
