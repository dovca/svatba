<template>
  <div class="overflow-hidden">
    <Transition @enter="enter" @leave="leave">
      <slot />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

function enter(el: Element, onComplete: () => void) {
  gsap.from(el, { height: 0, onComplete });
}

function leave(el: Element, onComplete: () => void) {
  gsap.to(el, { height: 0, onComplete });
}
</script>
