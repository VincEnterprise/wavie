<template>
  <section
    class="<==GLASS-PANEL__WRAPPER==> relative z-1 p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12"
  >
    <div
      class="
        <==GLASS-PANEL==>
        <!--📦-->
        absolute
        -z-1
        overflow-hidden
        -inset-[3px]
        <!--💄-->
        rounded-3xl
        sm:rounded-4xl
        bg-white/20
        shadow-md
        backdrop-blur-lg
      "
    >
      <div class="noise-texture absolute inset-0"></div>
      <div class="bg-gradient-to-b from-white/25 to-white/30 mask-exclude absolute inset-0 rounded-3xl sm:rounded-4xl p-[3px]"></div>
    </div>

    <slot></slot>
  </section>
</template>

<style scoped>
.noise-texture {
  background-image: url("./img/noise-texture.png");
  background-image: url("./img/noise.jpg");
  opacity: 0.05;
  background-size: 50%;
}
</style>
