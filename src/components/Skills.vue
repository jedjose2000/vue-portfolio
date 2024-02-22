<script setup>
  import usePortfolio from "@/composables/portfolio.js";
  import {onMounted} from "vue";

  const {getSkills, skills} = usePortfolio();
  onMounted(getSkills);
</script>
<template>
  <section class="bg-light-tail-100 dark:bg-dark-tail-100 py-24">
    <div class="container mx-auto">
      <div class="grid grid-cols-8 md:grid-flow-col">
        <template v-for="skill in skills" :key="skill.id">
          <div class="flex items-center justify-center ml-5">
              <img :src="skill.image" :alt="skill.name" class="lg:h-20">
          </div>
        </template>
      </div>
    </div>
  </section>
</template>