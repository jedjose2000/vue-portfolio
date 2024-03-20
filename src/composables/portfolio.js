import axios from 'axios';
import {ref} from 'vue';
import project from "@/components/Project.vue";

export default function usePortfolio(){
    const skills = ref([]);
    const projects = ref([]);
    const filteredProjects = ref([]);
    const selectedTab = ref('all');
    const latestDescription = ref();
    const getSkills = async () => {
        // const response = await axios.get('skills');
        skills.value = [
            {
                "id": 1,
                "name": "PHP",
                "image": '/images/php.svg',
            },
            {
                "id": 2,
                "name": "CodeIgniter",
                "image": '/images/codeigniter.svg'
            },
            {
                "id": 3,
                "name": "CSS",
                "image": '/images/css.svg'
            },
            {
                "id": 4,
                "name": "HTML",
                "image": '/images/html.svg'
            },
            {
                "id": 5,
                "name": "JavaScript",
                "image": '/images/javascript.svg'
            },
            {
                "id": 6,
                "name": "Laravel",
                "image": '/images/laravel.svg'
            },
            {
                "id": 7,
                "name": "MySQL",
                "image": '/images/mysql.svg'
            },
            {
                "id": 8,
                "name": "NodeJS",
                "image": '/images/nodejs.svg'
            },
            {
                "id": 9,
                "name": "TailWind",
                "image": '/images/tailwind.svg'
            },
            {
                "id": 10,
                "name": "Vue",
                "image": '/images/vue.svg'
            },
            {
                "id": 11,
                "name": "MongoDB",
                "image": '/images/mongodb.svg'
            },
            // Other skill objects...
        ];
        
    };

    // const getLatestDescription = async() =>{
    //     const response = await axios.get('getLatest');
    //     latestDescription.value = response.data.data.projectDescription;
    // }

    const getProjects = async () => {
        // const response = await axios.get('allProjects');
        projects.value = [
            {
                "id": 4,
                "name": "Portfolio Manager",
                "image": "/images/portfolio.png",
                "link": "https://my-portfolio-2024.online/",
                "gitHubUrl": "https://github.com/jedjose2000/MyPortfolio",
                "projectDescription": "A Portfolio Manager I created which is hosted using AWS to fetch the skills and projects I had using an API.",
                "projectImages": [
                    '/images/laravel.svg',
                    '/images/php.svg',
                    '/images/mysql.svg',
                    '/images/html.svg',
                    '/images/tailwind.svg',
                    '/images/javascript.svg',
                ],
                "project_skills": [
                    {
                        "project_id": 4,
                        "skill_id": 6,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 1,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 7,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 4,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 5,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                          "project_id": 4,
                          "skill_id": 9,
                          "created_at": "2024-02-28T11:05:29.000000Z",
                          "updated_at": "2024-02-28T11:05:29.000000Z"
                      }
                    ]
                },
                {
                    "id": 3,
                    "name": "URL Shortener",
                    "image": "/images/urlshortener.png",
                    "link": "https://66dda136-c0cc-448f-9a08-a2564a4bdb50-00-155ak6cjlyghn.sisko.replit.dev/",
                    "gitHubUrl": "https://github.com/jedjose2000/url-shortener",
                    "projectDescription": "A URL Shortener Microservice project I made from the Back End Development and APis course by freeCodeCamp",
                    "projectImages": [
                        '/images/nodejs.svg',
                        '/images/mongodb.svg',
                        '/images/javascript.svg',
                        '/images/html.svg',
                    ],
                    "project_skills": [
                        {
                            "project_id": 3,
                            "skill_id": 8,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 3,
                            "skill_id": 5,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 3,
                            "skill_id": 11,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 3,
                            "skill_id": 4,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                    ]
                },
                {
                    "id": 2,
                    "name": "Web Based Sales and Inventory System of Raj Petshop",
                    "image": "/images/rajpetshop.png",
                    "gitHubUrl": "https://github.com/jedjose2000/Project-Nocon",
                    "projectDescription": "A project where I worked on as both a Front-end and Back-end web developer. An inventory system for Raj Petshop which has the following modules: Dashboard, Category, Supplier, Products, Inventory, POS Teller, Reports.",
                    "projectImages": [
                        '/images/codeigniter.svg',
                        '/images/php.svg',
                        '/images/mysql.svg',
                        '/images/html.svg',
                        '/images/css.svg',
                        '/images/javascript.svg',
                    ],
                    "project_skills": [
                        {
                            "project_id": 2,
                            "skill_id": 2,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 1,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 7,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 4,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 3,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 5,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          }
                    ]
                },
                {
                    "id": 1,
                    "name": "Bautista Hospital QR Code-Based Contact Tracing System",
                    "image": "/images/bhospital.PNG",
                    "link": "https://bautistahospital.com/lander",
                    "gitHubUrl": "https://github.com/jedjose2000/BH.ContactTracingSystem",
                    "projectDescription": "A thesis project where I worked on as a backend developer utilizing PHP as the primary programming language. This project enabled the hospital to proactively track and monitor visitors and staff entering the premises and issue notifications in the event of potential contact with an infected or suspected COVID-19 individual.",
                    "projectImages": [
                        '/images/codeigniter.svg',
                        '/images/php.svg',
                        '/images/mysql.svg',
                        '/images/html.svg',
                        '/images/css.svg',
                        '/images/javascript.svg',
                    ],
                    "project_skills": [
                    {
                        "project_id": 1,
                        "skill_id": 2,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 1,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 7,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 4,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 3,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 5,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    }
                    ]
                },
            ];
        filteredProjects.value = [
            {
                "id": 4,
                "name": "Portfolio Manager",
                "image": "/images/portfolio.png",
                "link": "https://my-portfolio-2024.online/",
                "gitHubUrl": "https://github.com/jedjose2000/MyPortfolio",
                "projectDescription": "A Portfolio Manager I created which is hosted using AWS to fetch the skills and projects I had using an API.",
                "projectImages": [
                    '/images/laravel.svg',
                    '/images/php.svg',
                    '/images/mysql.svg',
                    '/images/html.svg',
                    '/images/tailwind.svg',
                    '/images/javascript.svg',
                ],
                "project_skills": [
                    {
                        "project_id": 4,
                        "skill_id": 6,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 1,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 7,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 4,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                        "project_id": 4,
                        "skill_id": 5,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                      },
                      {
                          "project_id": 4,
                          "skill_id": 9,
                          "created_at": "2024-02-28T11:05:29.000000Z",
                          "updated_at": "2024-02-28T11:05:29.000000Z"
                      }
                    ]
                },
                {
                    "id": 3,
                    "name": "URL Shortener",
                    "image": "/images/urlshortener.png",
                    "link": "https://66dda136-c0cc-448f-9a08-a2564a4bdb50-00-155ak6cjlyghn.sisko.replit.dev/",
                    "gitHubUrl": "https://github.com/jedjose2000/url-shortener",
                    "projectDescription": "A URL Shortener Microservice project I made from the Back End Development and APis course by freeCodeCamp",
                    "projectImages": [
                        '/images/nodejs.svg',
                        '/images/mongodb.svg',
                        '/images/javascript.svg',
                        '/images/html.svg',
                    ],
                    "project_skills": [
                        {
                            "project_id": 3,
                            "skill_id": 8,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 3,
                            "skill_id": 5,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 3,
                            "skill_id": 11,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 3,
                            "skill_id": 4,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                    ]
                },
                {
                    "id": 2,
                    "name": "Web Based Sales and Inventory System of Raj Petshop",
                    "image": "/images/rajpetshop.png",
                    "gitHubUrl": "https://github.com/jedjose2000/Project-Nocon",
                    "projectDescription": "A project where I worked on as both a Front-end and Back-end web developer. An inventory system for Raj Petshop which has the following modules: Dashboard, Category, Supplier, Products, Inventory, POS Teller, Reports.",
                    "projectImages": [
                        '/images/codeigniter.svg',
                        '/images/php.svg',
                        '/images/mysql.svg',
                        '/images/html.svg',
                        '/images/css.svg',
                        '/images/javascript.svg',
                    ],
                    "project_skills": [
                        {
                            "project_id": 2,
                            "skill_id": 2,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 1,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 7,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 4,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 3,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          },
                          {
                            "project_id": 2,
                            "skill_id": 5,
                            "created_at": "2024-02-28T11:05:29.000000Z",
                            "updated_at": "2024-02-28T11:05:29.000000Z"
                          }
                    ]
                },
                {
                    "id": 1,
                    "name": "Bautista Hospital QR Code-Based Contact Tracing System",
                    "image": "/images/bhospital.PNG",
                    "link": "https://bautistahospital.com/lander",
                    "gitHubUrl": "https://github.com/jedjose2000/BH.ContactTracingSystem",
                    "projectDescription": "A thesis project where I worked on as a backend developer utilizing PHP as the primary programming language. This project enabled the hospital to proactively track and monitor visitors and staff entering the premises and issue notifications in the event of potential contact with an infected or suspected COVID-19 individual.",
                    "projectImages": [
                        '/images/codeigniter.svg',
                        '/images/php.svg',
                        '/images/mysql.svg',
                        '/images/html.svg',
                        '/images/css.svg',
                        '/images/javascript.svg',
                    ],
                    "project_skills": [
                    {
                        "project_id": 1,
                        "skill_id": 2,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 1,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 7,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 4,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 3,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    },
                    {
                        "project_id": 1,
                        "skill_id": 5,
                        "created_at": "2024-02-28T11:05:29.000000Z",
                        "updated_at": "2024-02-28T11:05:29.000000Z"
                    }
                    ]
                },
            ];
           
                  
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
    };

    return {
        skills,
        getSkills,
        projects,
        getProjects,
        selectedTab,
        filteredProjects,
        filterProjects,
        // getLatestDescription,
        // latestDescription
    }
};