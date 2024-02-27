import axios from 'axios';
import {ref} from 'vue';
import project from "@/components/Project.vue";

export default function usePortfolio(){
    const skills = ref([]);
    const projects = ref([]);
    const filteredProjects = ref([]);
    const selectedTab = ref('all');
    const getSkills = async () => {
        const response = await axios.get('http://laravel-app-env.eba-ikq93um4.ap-southeast-2.elasticbeanstalk.com/api/skills ');
        skills.value = response.data.data;
    };

    const getProjects = async () => {
        const response = await axios.get('allProjects');
        projects.value = response.data.data;
        filteredProjects.value = response.data.data;
    };

    const filterProjects = (id) =>{
        if(id === 'all'){
            filteredProjects.value = projects.value;
            selectedTab.value = id;
        }else {
            filteredProjects.value = projects.value.filter(project => {
                return project.project_skills.some(skill => skill.skill_id === id);
            });
            selectedTab.value = id;
        }

        // addImagesToFilteredProjects(); code removed
    };

    //code removed

    // const addImagesToFilteredProjects = () => {
    //     // Iterate through each project in filteredProjects
    //     filteredProjects.value.forEach(project => {
    //         project.projectImages = [];
    //         const projectSkills = project.project_skills;
    //         projectSkills.forEach(projSkill => {
    //             const skill = skills.value.find(skill => skill.id === projSkill.skill_id);
    //             if (skill) {
    //                 project.projectImages.push(skill.image);
    //             }
    //         });
    //     });
    // };

    return {
        skills,
        getSkills,
        projects,
        getProjects,
        selectedTab,
        filteredProjects,
        filterProjects,
    }
};