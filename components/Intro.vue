<template>
  <div ref="el" class="h-dvh w-full mix-blend-multiply invisible pointer-events-none">
    <div ref="textWrapper" class="fixed h-dvh w-full -z-10">
      <img
        ref="text"
        src="/intro_text.png"
        alt="Eva a David budou mít svatbu 7. září 2024 ve 13h, areál Lhotka, Lidmaň 395 01"
        class="size-full object-contain"
      />
    </div>
    <IntroImageSVG class="size-full" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cleanup, staggered } from "~/utils";
import IntroImageSVG from "assets/svatebni_pozvanka.svg";
import type { ComponentPublicInstance } from "vue";

const el = ref<HTMLElement | null>(null);
const textWrapper = ref<HTMLElement | null>(null);
const text = ref<HTMLElement | null>(null);

function animateFlower(target: GSAPTweenTarget): GSAPAnimation {
  return gsap.from(target, {
    scale: 0,
    duration: 1,
    yPercent: 20,
    ease: "back.out(1.5)",
    transformOrigin: "50% 50%",
  });
}

function setupGraphicsAnimation() {
  if (!el.value || !text.value) return;

  const animation = gsap
    .timeline({ delay: 0.5 })
    .add(() => {
      el.value!.classList.remove("invisible");
    })
    .from("#koblizci", { opacity: 0, duration: 0.2 })
    .from("#cestaVlevo, #cestaVpravo", { drawSVG: false, ease: "power2.inOut", duration: 2 })
    .from("#hrebeny path", { drawSVG: false, stagger: 0.02, ease: "power2.out" }, "-=1")
    .from("#stiny", { opacity: 0 }, "-=100%")
    .addLabel("kytky", "-=0.8")
    .add(staggered(["#kytka1p", "#kytka2p", "#kytka3p", "#kytka4p"].map(animateFlower), 0.15), "kytky")
    .add(staggered(["#kytka1l", "#kytka2l", "#kytka3l"].map(animateFlower), 0.2), "kytky")
    .addLabel("fadeIn")
    .from("#ilustrace", { opacity: 0, duration: 1.5, clearProps: true }, "fadeIn-=0.5")
    .from(text.value, { opacity: 0, duration: 2 }, "fadeIn-=1")
    .from(text.value, { yPercent: 2, duration: 1.5, ease: "power2.out" }, "<")
    .add(() => {
      gsap.set("#hory, #cesta, #koblizci, #kytky", { display: "none" });
    });

  return () => {
    animation.kill();
  };
}

function setupTextParallax() {
  if (!el.value || !textWrapper.value) return;

  const scrollTrigger = ScrollTrigger.create({
    trigger: el.value,
    start: "top top",
    end: "top -30%",
    scrub: true,
    animation: gsap.to(textWrapper.value, {
      opacity: 0,
      scale: 0.9,
      ease: "none",
    }),
  });

  return () => {
    scrollTrigger.kill();
  };
}

onMountedWithCleanup(() => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

  return cleanup(setupGraphicsAnimation(), setupTextParallax());
});
</script>
