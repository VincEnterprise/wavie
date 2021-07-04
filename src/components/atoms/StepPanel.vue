<template>
  <transition
    appear
    enter-active-class="transition duration-1000 ease-cubic-button-2"
    enter-from-class="opacity-75 scale-90 grayscale"
    enter-to-class="opacity-100 scale-100 grayscale-0"
  >
    <div
      class="
        <==STEP-PANEL==>
        <!--📦-->
        flex
        gap-2
        w-full
        p-6
        lg:p-8
        xl:p-10
        <!--💄-->
        bg-white
        text-gray-600
        rounded-3xl
        shadow-md
        <!--🚀-->
        ease-button-cubic-2
        duration-300
      "
    >
      <div class="<==STEP-PANEL__INNER==> flex flex-col flex-grow max-w-full ">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
