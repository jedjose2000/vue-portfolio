<script setup>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Promote from "@/components/Promote.vue";
import Footer from '@/components/Footer.vue';
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";
</script>

<template>
  <Header/>
<!-- Main -->
  <main class="min-h-screen">
    <!-- Hero Section -->
    <Hero />
    <!-- Promote Section -->
    <Promote/>
    <!-- About Section -->
    <About/>
    <!-- Skills Section -->
    <Skills/>
    <!-- Portfolio Section -->
    <Portfolio/>
    <!-- Contact Section -->
    <Contact/>
  </main>
<!--  Footer -->
  <Footer/>
</template>

