<script setup>
import usePortfolio from "@/composables/portfolio.js";
import {onMounted, ref} from "vue";
import { Marquee } from "@mjakupi/vue-marquee";
import '@mjakupi/vue-marquee/dist/style.css'
const {getSkills, skills} = usePortfolio();
const isRtl = ref(false);
onMounted(getSkills);

</script>
<template>
    <section class="bg-light-tail-100 dark:bg-dark-tail-100 py-20  marquee-container overflow-hidden">
      <div class="container mx-auto">
        <Marquee
            :items="skills"
            :outset="0"
            :rtlOutset="-1"
            :speed="50"
            direction="horizontal"
            :rtl="isRtl" >
          <template v-slot="{ item }">
            <img :src="item.image" :alt="item.name" class="lg:h-20 md:h-20 sm:h-12 2sm:h-12 xtrasm:h-10" v-motion-roll-visible-bottom >
          </template>
        </Marquee>
      </div>
    </section>
</template>
