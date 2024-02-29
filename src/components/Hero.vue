
<template>
  <div id="home" class="section  flex items-center bg-light-primary lg:h-[100vh]  md:h-[100vh]  sm:h-[100vh] xl:h-[100vh] xtrasm:h-[100vh] overflow-hidden">
    <section id="home">
        <div     v-motion
                 :initial="{ opacity: 0, y: 100 }"
                 :enter="{ opacity: 1, y: 0, scale: 1 }"
                 :variants="{ custom: { scale: 2 } }"
                 :delay="1500" class="container mx-auto h-full">
        <div class="flex flex-col lg:flex-row items-center h-full pt-8">
          <div class="flex-1 flex flex-col items-center lg:items-start cursor-pointer">
            <p class="text-3xl  text-white font-bold text-md mb-[22px]">Hello, I am Jed Lester Jose</p>
            <h1 class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Web Developer
            </h1>
          </div>
        </div>
        </div>
    </section>
  </div>
</template>


<script>
  document.addEventListener("DOMContentLoaded", function() {
    var wavesEffect = VANTA.WAVES({
      el: "#home",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    });

  });
</script>
