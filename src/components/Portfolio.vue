<script setup>
  import Projects from "@/components/Projects.vue";
  import usePortfolio from "@/composables/portfolio.js";
  import {onMounted} from "vue";
  const {getLatestDescription, latestDescription} = usePortfolio();
  onMounted(async()=>{
    await getLatestDescription();
  })
</script>

<template>
  <section id="portfolio" class="section bg-light-primary dark:bg-dark-primary min-h-[1400px]">
    <div class="container mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2 class="section-title">
          My Latest Project
        </h2>
        <p class="subtitle text-black dark:text-inherit">
          {{latestDescription}}
        </p>
      </div>
    </div>
    <Projects/>
  </section>
</template>