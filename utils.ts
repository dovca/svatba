import gsap from "gsap";

export function staggered(items: GSAPAnimation[], stagger = 0.1): GSAPAnimation {
  const tl = gsap.timeline();
  items.forEach((item, index) => {
    tl.add(item, index * stagger);
  });
  return tl;
}

export function cleanup(...fns: ((() => void) | undefined | null)[]) {
  return () => {
    fns.forEach((fn) => fn?.());
  };
}
