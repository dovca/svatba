<template>
  <div ref="mapWrapper" class="w-full aspect-square" />
</template>

<script setup lang="ts">
import { h, render } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import MapMarker from "~/components/MapMarker.vue";

const config = useRuntimeConfig();

const mapWrapper = ref<HTMLElement | null>(null);

const cernovice = { lat: 49.372073657579314, lng: 14.961792966411025 };
const lidman = { lat: 49.381396910517445, lng: 15.036921269544274 };

onMounted(async () => {
  const loader = new Loader({
    apiKey: config.public.mapsApiKey,
    version: "weekly",
  });

  const [{ LatLngBounds }, { Map }, { AdvancedMarkerElement }] = await Promise.all([
    loader.importLibrary("core"),
    loader.importLibrary("maps"),
    loader.importLibrary("marker"),
  ]);

  const map = new Map(mapWrapper.value!, {
    mapId: "dbc5555d019f23ad",
    center: { lat: 49.3865674, lng: 15.0149713 },
    zoom: 15,
    disableDefaultUI: true,
  });

  const markerVNode = h(MapMarker, "Lhotka");
  const markerWrapper = document.createElement("div");
  render(markerVNode, markerWrapper);

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 49.3865674, lng: 15.0149713 },
    content: markerWrapper,
  });

  marker.addListener("click", () => {
    window.open("https://maps.app.goo.gl/qQm5ZuTN7TMPRQuf6", "_blank");
  });

  const bounds = new LatLngBounds();
  bounds.extend(cernovice);
  bounds.extend(lidman);

  map.fitBounds(bounds);
});
</script>
