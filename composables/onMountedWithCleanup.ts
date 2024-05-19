export function onMountedWithCleanup(hook: () => (() => void) | undefined) {
  let cleanup: (() => void) | undefined;

  const cleanupHook = () => {
    if (cleanup) {
      cleanup();
    }
  };

  onMounted(() => {
    cleanup = hook();
  });
  onBeforeUnmount(cleanupHook);
  onDeactivated(cleanupHook);
}
