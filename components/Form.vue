<template>
  <div id="form">
    <Transition mode="out-in" name="fade">
      <div v-if="isSent" class="!my-32">
        <p class="text-center text-4xl">Děkujeme za vyplnění!</p>
      </div>
      <FormKit
        v-else
        type="form"
        v-model="form"
        :actions="false"
        incomplete-message="Prosíme, vyplňte všechna povinná pole"
        @submit="onSubmit"
      >
        <div class="grid sm:grid-cols-2 gap-x-4">
          <FormKit
            name="name"
            type="text"
            label="Jméno/Jména *"
            validation="required"
            help="Jméno a příjmení všech, za které vyplňujete dotazník"
            :validation-messages="{
              required: 'Povězte nám, jak se jmenujete',
            }"
          />
          <FormKit
            name="personCount"
            max="4"
            min="1"
            type="number"
            label="Počet lidí"
            help="V případě, že vyplňujete za víc lidí"
          />
        </div>
        <hr class="border-0 border-t border-t-neutral-700 my-10" />
        <div class="flex flex-wrap gap-4 justify-between max-sm:flex-col">
          <FormKit name="vegetarian" type="checkbox" label="Chci jídlo bez masa" decoratorIcon="check" />
          <FormKit name="glutenFree" type="checkbox" label="Chci jídlo bez lepku" decoratorIcon="check" />
          <FormKit name="accommodation" type="checkbox" label="Chci na Lhotce přespat" decoratorIcon="check" />
        </div>
        <ExpandTransition>
          <div v-if="form.accommodation && !vipMode">
            <p class="pt-6">
              Ubytování ze soboty na neděli včetně snídaně je možné za {{ ACCOMMODATION_PER_PERSON }} Kč/osobu. Kdybyste
              chtěli přijet už v&nbsp;pátek a&nbsp;pomoct nám s&nbsp;přípravou, dejte vědět :)
            </p>
            <img :src="qrCode" alt="QR Platba" class="mx-auto" />
          </div>
        </ExpandTransition>
        <hr class="border-0 border-t border-t-neutral-700 my-10" />
        <FormKit
          name="note"
          type="textarea"
          label="Chci vzkázat něco dalšího"
          :classes="{
            outer: 'w-full',
            input: 'min-h-32',
          }"
        />
        <FormKit type="submit" :label="isSending ? 'Odesílám...' : 'Odeslat'" :classes="{ outer: 'mt-10' }" />
        <p v-if="isSent === false" class="text-lg text-red-700">
          Moc se omlouváme, formulář se nepovedlo odeslat. Napište nám prosím jiným způsobem.
        </p>
      </FormKit>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

type Props = {
  vipMode?: boolean;
};

defineProps<Props>();

onMounted(() => {
  gsap.registerPlugin(ScrollToPlugin);
});

const form = ref({
  name: "",
  personCount: 1,
  vegetarian: false,
  glutenFree: false,
  accommodation: false,
  note: "",
});

const isSent = ref<boolean | null>(null);
const isSending = ref(false);

const ACCOMMODATION_PER_PERSON = 650;
const accommodationCost = computed(() => ACCOMMODATION_PER_PERSON * (form.value.personCount || 0));
const qrCodeText = computed(() => `SPD*1.0*ACC:CZ0930300000001286961011*AM:${accommodationCost.value}.00*CC:CZK`);
const qrCode = useQRCode(qrCodeText, { width: 400, height: 400 });

async function onSubmit() {
  try {
    isSending.value = true;
    await $fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(form.value),
    });
    console.log("Form submitted!");
    isSent.value = true;
    gsap.to(window, { duration: 0.5, scrollTo: { y: "#form", offsetY: window.innerHeight / 2 - 100 } });
  } catch (e: unknown) {
    console.error("Failed to submit form", e);
    isSent.value = false;
  }
}
</script>
