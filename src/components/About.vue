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
        <img src="@/assets/img/home-computer.jpg" alt="About Image" class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl">
        <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="flex flex-col">
            <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
              About Me
            </h2>
            <p class="mb-4 text-accent">
              Freelance Developer
            </p>
            <hr class="mb-8 opacity-90 dark:opacity-5" />
            <p class="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsa mollitia necessitatibus neque quibusdam. Aliquid asperiores beatae deleniti, dicta dignissimos dolor dolore facere laboriosam magni modi nobis praesentium quod sunt.</br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid dolorum earum error excepturi facere illo impedit iste laborum, molestiae mollitia officia officiis quis repellat tempora veniam voluptates, voluptatum. Dolor!
            </p>
          </div>
          <a href="#contact" class="btn btn-md bg-accent text-light-tail-100">
            Work with me
          </a>
        </div>
      </div>
    </Motion>
  </section>
</template>
