<script setup lang="ts">
import { Motion } from "@oku-ui/motion";
import { onMounted, ref } from 'vue';
import { observeSection } from '@/motions/motion';
const motionVisible = ref(false);

onMounted(()=>{
  observeSection('about',motionVisible);
});


</script>

<template>
  <section id="about" class="section bg-light-secondary dark:bg-dark-secondary">
    <Motion
        class="container mx-auto"
        :initial="{ opacity: 0, scale: 1 }"
        :animate="{ opacity: motionVisible ? 1 : 0, scale: motionVisible ? 1 : 0 }"
        :transition="{ delay: 1 }"
    >
      <div class="flex flex-col xl:flex-row gap-24">
        <img src="@/assets/img/myprofile.jpg" alt="About Image" class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl">
        <div class="flex flex-col items-center text-center lg:items-start lg:text-left" >
          <div class="flex flex-col">
            <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
              About Me
            </h2>
            <p class="mb-4 text-accent">
              Backend Developer
            </p>
            <hr class="mb-8 opacity-90 dark:opacity-5" />
            <p class="mb-8 indent-10">
              As an aspiring web developer, I am passionate about building engaging, user-friendly websites that not only look great but also function seamlessly.
            </p>
            <p class="mb-8 indent-10">
              I am continuously improving my front-end and back-end development skills in order to develop innovative technological solutions.
            </p>
          </div>
          <a href="@/assets/resume/Jed%20Lester%20P.%20Jose%20(RESUME).pdf" download class="btn btn-md bg-accent text-light-tail-100">
            Resume
          </a>
        </div>
      </div>
    </Motion>
  </section>
</template>
