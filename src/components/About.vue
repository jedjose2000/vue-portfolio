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
        <div class="flex flex-col items-center text-center lg:items-start lg:text-left cursor-default" >
          <div class="flex flex-col">
            <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
              About Me
            </h2>
            <p class="mb-4 text-accent">
              Backend Developer
            </p>
            <hr class="mb-8 opacity-90 dark:opacity-5"/>
            <p class="mb-8 indent-10 text-justify text-black dark:text-inherit">
              I am passionate about building engaging, user-friendly websites that not only looks great but also function seamlessly. I am continuously improving my front-end and back-end development skills in order to develop innovative technological solutions. Moreover, I am also eager to learn manual and automation testing methodologies in order to take part in developing high-quality software products.
              My hobbies are playing video games and learning programming languages and tools.
            </p>
            <p class="mb-8 indent-10 text-justify text-black dark:text-inherit">
              My goal is to build a rewarding career in software development where I can apply my skills, creativity, passion, and dedication to producing outstanding online experiences. I am looking forward to connecting with other industry experts in the field.
            </p>
          </div>
          <div class="pt-4">
            <h5 class="text-lg flex justify-center lg:justify-start items-center text-black dark:text-white mb-2">
              Follow me on
            </h5>
          </div>
          <div class="flex flex-col lg:flex-row  lg:w-full">
            <div class="flex items-center mb-6">
              <!-- Discord -->
              <a href="https://discord.com/users/816101685175910400" class="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="@/assets/img/discord.svg" alt="Discord Image" class="w-7 h-7">
              </a>

              <!-- Github -->
              <a href="https://github.com/jedjose2000/" class="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="@/assets/img/github-142-svgrepo-com.svg" alt="Github Image" class="w-7 h-7">
              </a>

              <!-- Facebook -->
              <a href="https://www.facebook.com/jedlester.jose?mibextid=ZbWKwL" class="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="@/assets/img/facebook-color-svgrepo-com.svg" alt="Facebook Image" class="w-7 h-7">
              </a>

              <!-- Linkedin -->
              <a href="https://www.linkedin.com/in/jed-lester-jose-251a6425a/" class="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="@/assets/img/linkedin-color-svgrepo-com.svg" alt="LinkedIn Image" class="w-7 h-7">
              </a>

            </div>
            <div class="flex justify-end md:ml-auto lg:ml-auto">
              <a href="https://jedlester-jose-portfolio.netlify.app/Jed%20Lester%20Jose%20Resume.pdf" download="Jed Lester Jose Resume.pdf" class="btn btn-md bg-accent text-light-tail-100 hover:bg-blue-500">
                Download my Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  </section>
</template>
