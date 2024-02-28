<script setup>
  import {ref, onMounted} from 'vue';
  const MobileNavOpen = ref(false);
  const scrollBg = ref(false);
  import { useDark, useToggle } from "@vueuse/core";
  import {VueDarkModeToggle, useDarkMode} from "@edenchazard/vue-dark-mode-toggle";
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const navigations = [
    {name: "Home", link: "#home"},
    {name: "About", link: "#about"},
    {name: "Portfolio", link: "#portfolio"},
    {name: "Contact", link: "#contact"},
  ];
  const {enabled, toggle} = useDarkMode();

  const setScrollBg = (value) =>{
    scrollBg.value = value;
  }
  onMounted(()=>{
    window.addEventListener("scroll", ()=>{
      return window.scrollY > 50 ? setScrollBg(true) : setScrollBg(false);
    })
  })
</script>
<template>
  <!-- ====== Navbar Section Start -->
  <header>
    <nav :class="[scrollBg ? 'bg-light-primary dark:bg-dark-primary' : 'bg-white dark:bg-gray-900']" class="w-full fixed z-20 border-gray-200 dark:bg-gray-900 px-2 " >
      <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="https://jedlester-jose-portfolio.netlify.app/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JL</span>
          <h4>.dev</h4>
        </a>
        <button @click="MobileNavOpen =! MobileNavOpen" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div class="w-full md:block md:w-auto" :class="MobileNavOpen || 'hidden'">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <template v-for="nav in navigations" :key="nav.link">
              <li>
                <a :href="nav.link" class="block py-2 px-3 text-cyan-950 dark:text-white rounded md:p-0 md:dark:text-white" aria-current="page">{{nav.name}}</a>
              </li>
            </template>
            <label class="switch">
              <input class="switch__input cursor-pointer" type="checkbox" role="switch" v-model="isDark" id="rerun">
              <svg class="switch__icon switch__icon--light" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
                <g fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
                  <circle cx="6" cy="6" r="2" />
                  <g stroke-dasharray="1.5 1.5">
                    <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
                  </g>
                </g>
              </svg>
              <svg class="switch__icon switch__icon--dark" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
                <g fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="round" transform="rotate(-45,6,6)">
                  <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"/>
                </g>
              </svg>
              <span class="switch__sr">Dark Mode</span>
            </label>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- ====== Navbar Section End -->
</template>

<style scoped>

body:has(.switch__input:checked) {
  background-color: var(--fg);
  color: var(--bg);
}
.switch {
  margin: auto;
  position: relative;
}
.switch__icon,
.switch__input {
  display: block;
}
.switch__icon {
  position: absolute;
  top: 0.375em;
  right: 0.375em;
  width: 0.75em;
  height: 0.75em;
  transition:
      opacity calc(var(--trans-dur) / 2),
      transform calc(var(--trans-dur) / 2);
}
.switch__icon polyline {
  transition: stroke-dashoffset calc(var(--trans-dur) / 2);
}
.switch__icon--light,
.switch__icon--light polyline {
  transition-delay: calc(var(--trans-dur) / 2);
  transition-timing-function: var(--trans-timing-out);
}
.switch__icon--dark {
  opacity: 0;
  transform: translateX(-0.75em) rotate(30deg) scale(0.75);
  transition-timing-function: var(--trans-timing-in);
}
.switch__input {
  background-color: hsl(210,90%,70%);
  border-radius: 0.75em;
  box-shadow:
      0 0 0 0.125em hsla(var(--hue),90%,50%,0),
      0.125em 0.125em 0.25em hsla(var(--hue),90%,10%,0.2);
  outline: transparent;
  position: relative;
  width: 3em;
  height: 1.5em;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  transition:
      background-color var(--trans-dur) var(--trans-timing),
      box-shadow 0.15s linear;
}
.switch__input:focus-visible {
  box-shadow:
      0 0 0 0.125em hsl(var(--hue),90%,50%),
      0.125em 0.125em 0.25em hsla(var(--hue),90%,10%,0.2);
}
.switch__input:before,
.switch__input:after {
  content: "";
  display: block;
  position: absolute;
}
.switch__input:before {
  background-color: hsl(50,90%,50%);
  border-radius: inherit;
  mask-image: linear-gradient(120deg,hsl(0,0%,0%) 20%,hsla(0,0%,0%,0) 80%);
  -webkit-mask-image: linear-gradient(120deg,hsl(0,0%,0%) 20%,hsla(0,0%,0%,0) 80%);
  inset: 0;
  transition: background-color var(--trans-dur) var(--trans-timing);
}
.switch__input:after {
  background-color: hsl(0,0%,100%);
  border-radius: 50%;
  box-shadow: 0.05em 0.05em 0.05em hsla(var(--hue),90%,10%,0.1);
  top: 0.125em;
  left: 0.125em;
  width: 1.25em;
  height: 1.25em;
  transition:
      background-color var(--trans-dur) var(--trans-timing),
      transform var(--trans-dur) var(--trans-timing);
  z-index: 1;
}
.switch__input:checked {
  background-color: hsl(290,90%,40%);
}
.switch__input:checked:before {
  background-color: hsl(220,90%,40%);
}
.switch__input:checked:after {
  background-color: hsl(0,0%,0%);
  transform: translateX(1.5em);
}
.switch__input:checked ~ .switch__icon--light,
.switch__input:checked ~ .switch__icon--light polyline {
  transition-delay: 0s;
  transition-timing-function: var(--trans-timing-in);
}
.switch__input:checked ~ .switch__icon--light {
  opacity: 0;
  transform: translateX(-0.75em) rotate(-30deg) scale(0.75);
}
.switch__input:checked ~ .switch__icon--light polyline {
  stroke-dashoffset: 1.5;
}
.switch__input:checked ~ .switch__icon--dark {
  opacity: 1;
  transform: translateX(-1.5em);
  transition-delay: calc(var(--trans-dur) / 2);
  transition-timing-function: var(--trans-timing-out);
}
.switch__sr {
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

</style>
