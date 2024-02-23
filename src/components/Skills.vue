<script setup>
  import usePortfolio from "@/composables/portfolio.js";
  import {onMounted, ref} from "vue";
  import {Motion} from "@oku-ui/motion";
  import {observeSection} from "@/motions/motion.js";

  const motionVisibleSkills = ref(false);

  const {getSkills, skills} = usePortfolio();
  onMounted(getSkills);
  // onMounted(()=>{
  //   observeSection('portfolio',motionVisibleSkills);
  // })
</script>
<template>
  <section class="bg-light-tail-100 dark:bg-dark-tail-100 py-24">
<!--    <Motion-->
<!--        class="container mx-auto"-->
<!--        :initial="{ opacity: 0, scale: 1 }"-->
<!--        :animate="{ opacity: 1, scale: 1 }"-->
<!--        :transition="{ delay: 1 }"-->
<!--    >-->
      <div class="container mx-auto"  >
        <div class="grid grid-cols-8 md:grid-flow-col">
          <template v-for="skill in skills" :key="skill.id" v-if="skills != null">
            <div class="flex items-center justify-center ml-5">
                <img :src="skill.image" :alt="skill.name" class="lg:h-20 sm:h-15" v-motion-roll-visible-bottom>
            </div>
          </template>
        </div>
      </div>
<!--    </Motion>-->
  </section>
</template>