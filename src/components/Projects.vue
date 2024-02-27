<script setup>
  import usePortfolio from "@/composables/portfolio.js";
  import {onMounted, ref} from "vue";
  import Skills from "@/components/Skills.vue";
  import Project from "@/components/Project.vue";
  const {getSkills, skills, getProjects, projects, selectedTab, filterProjects, filteredProjects} = usePortfolio();
  // onMounted(getSkills);
  // onMounted(getProjects);

  onMounted(async () => {
    await getSkills()
    await getProjects()
    await filterProjects('all');
  });

</script>


<template>
  <div class="container mx-auto">
    <nav class="relative w-full overflow-x-auto mb-12 border-b-2 border-light-tail-100 dark:text-dark-tail-100 scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-light-primary dark:scrollbar-track-black scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <ul class="inline-flex"  v-motion-slide-bottom>
        <li class="cursor-pointer capitalize m-4" >
          <button @click="filterProjects('all')"  id="selectAllBtn" class="w-32 text-center px-5 py-2 bg-blue-500 dark:bg-dark-tail-100 hover:bg-accent text-white rounded-md transition" :class="[selectedTab === 'all' ? 'bg-red-800 dark:bg-red-800' : '']">
            All
          </button>
        </li>
        <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills" :key="projectSkill.id">
          <button @click="filterProjects(projectSkill.id)" class="w-32 text-center px-5 py-2 bg-blue-500 dark:bg-dark-tail-100 hover:bg-accent text-white rounded-md transition whitespace-nowrap" :class="[selectedTab === projectSkill.id ? 'bg-red-800 dark:bg-red-800' : '']">
            {{projectSkill.name}}
          </button>
        </li>
      </ul>
    </nav>
    <section class="grid gap-y-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8"  v-motion-pop-visible>
      <Project v-for="project in filteredProjects" :key="project.id" :project="project" :selectedTab="selectedTab" :filterProjects="filterProjects"/>
    </section>
  </div>
</template>
<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // Simulate a click on the first button associated with 'All' when the component is mounted
      const allButton = document.getElementById('selectAllBtn');
      if (allButton) {
        console.log('iam clicked')
        allButton.click();
      }else{
        console.log('iam not clicked')
      }
    });

  }
}

</script>