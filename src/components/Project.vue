<script setup>
  import "./Project.vue";
  import "@/components/Project.vue";
  import {onMounted, watch} from "vue";
  import usePortfolio from "@/composables/portfolio.js";

  defineProps({
    project:Object,

  })

</script>

<template>
  <div class="mx-auto w-full max-w-[26rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg  group ease-in duration-300 group-hover:scale-105 dark:bg-dark-secondary">
    <div class="mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ease-in duration-700 group-hover:scale-105">
      <img class="mx-auto lg:h-56 object-cover max-h-48 object-center  ease-in duration-700 group-hover:scale-75"
           :src="project.image"
           alt="ui/ux review check"
      />
      <div class="border-solid border-2 border-sky-400 rounded-xl bg-dark-primary ">
        <p class="text-white p-1 ml-2 group-hover:text-blue-400 cursor-default">{{project.name}}</p>
      </div>
    </div>
    <div class="p-6">
      <div class="mb-3 flex items-center justify-between">
        <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased cursor-default">
          {{project.name}}
        </h5>
      </div>
      <div class="max-h-50">
        <p class="block font-sans text-base font-light  text-gray-700 text-justify leading-relaxed antialiased whitespace-nowrap overflow-hidden overflow-ellipsis w-40 dark:text-yellow-200 cursor-default">
          {{project.projectDescription}}
        </p>
      </div>

      <p class="text-black mt-16 dark:text-white cursor-default">Tags: </p>
      <div class="group mt-2 inline-flex flex-wrap items-center gap-3">
          <img  v-for="projectImages in project.projectImages"  :src="projectImages" :key="projectImages.id" alt="Skill Image" class="h-10">
      </div>


    </div>
    <div class="p-6 pt-3">
      <a :href="project.gitHubUrl" target="_blank" class="flex flex-row">
        <button
            class="flex items-center justify-center select-none rounded-lg bg-blue-500 py-3.5 px-7 my-5 text-center font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:blue-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
            type="button"
            data-ripple-light="true"
        >
          <span>Github</span>
          <img src="@/assets/img/github-142-svgrepo-com.svg" alt="Github Image" class="w-6 h-6 ml-2">
        </button>
      </a>

      <a :href="project.link" target="_blank" v-if="project.link != null" class="flex flex-row">
        <button
            class="flex items-center justify-center w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
          <span>Link</span>
          <img src="@/assets/img/link-svgrepo-com.svg" alt="Link Image" class="w-6 h-6 ml-2">
        </button>
      </a>
    </div>
  </div>
</template>